// Required for Node.js
const fetch = require('node-fetch');

// Fetch with retry for rate limit and network error handling
function fetchWithRetry(url, retries = 3, delay = 1000) {
  if (typeof fetch !== 'function') {
    throw new Error('Fetch is not available. Ensure node-fetch is installed.');
  }

  return fetch(url).then((response) => {
    if (response.status === 403 && retries > 0) {
      console.warn(`Rate limit hit for ${url}, retrying after ${delay}ms...`);
      return new Promise(resolve => setTimeout(resolve, delay)).then(() =>
        fetchWithRetry(url, retries - 1, delay * 2)
      );
    }
    return response;
  }).catch((error) => {
    if (retries > 0) {
      console.warn(`Network error for ${url}, retrying after ${delay}ms...`);
      return new Promise(resolve => setTimeout(resolve, delay)).then(() =>
        fetchWithRetry(url, retries - 1, delay * 2)
      );
    }
    throw new Error(`Network error: ${error.message}`);
  });
}

// Main function to analyze a GitHub user's activity
function analyzeGitHubUser(username) {
  // Input validation
  if (!username || typeof username !== 'string' || username.trim() === '') {
    return Promise.reject(new Error('Invalid username: Must be a non-empty string'));
  }
  if (!/^[a-zA-Z0-9-]{1,39}$/.test(username.trim())) {
    return Promise.reject(new Error('Invalid username: Must be 1-39 characters, letters, numbers, or hyphens'));
  }

  console.log(`\n=== GitHub Analyzer Demo: ${username} ===`);
  // Step 1: Fetch user profile
  return fetchWithRetry(`https://api.github.com/users/${username.trim()}`)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) throw new Error('User not found');
        if (response.status === 403) throw new Error('API rate limit exceeded');
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((userData) => {
      console.log(`User Profile: ${userData.name || username} (${userData.login})`);
      console.log(`Public Repos: ${userData.public_repos}`);

      // Step 2: Fetch user's repositories
      return fetchWithRetry(userData.repos_url)
        .then((response) => {
          if (!response.ok) throw new Error(`Failed to fetch repositories: ${response.status}`);
          return response.json();
        })
        .then((repos) => {
          if (!repos.length) throw new Error('No public repositories found');

          // Step 3: Find the most recently updated repository
          const latestRepo = repos.reduce((latest, repo) =>
            new Date(repo.updated_at) > new Date(latest.updated_at) ? repo : latest
          );

          console.log(`Latest Repository: ${latestRepo.name} (Updated: ${latestRepo.updated_at})`);

          // Step 4: Fetch commits for the latest repository (limit to 5)
          return fetchWithRetry(`${latestRepo.commits_url.replace('{/sha}', '')}?per_page=5`)
            .then((response) => {
              if (!response.ok) throw new Error(`Failed to fetch commits: ${response.status}`);
              return response.json();
            })
            .then((commits) => {
              // Step 5: Return combined data
              return { user: userData, latestRepo, commits };
            });
        });
    })
    .then((result) => {
      // Final step: Format and display the summary
      console.log('\nGitHub Activity Summary:');
      console.log(`User: ${result.user.name || result.user.login}`);
      console.log(`Total Public Repos: ${result.user.public_repos}`);
      console.log(`Latest Repo: ${result.latestRepo.name}`);
      console.log(`Recent Commits (${result.commits.length}):`);
      result.commits.forEach((commit, index) => {
        const message = commit.commit.message || '[No commit message]';
        const author = commit.commit.author?.name || 'Unknown';
        const date = commit.commit.author?.date || 'Unknown';
        console.log(`  ${index + 1}. ${message} (by ${author}, ${date})`);
      });
      return result;
    })
    .catch((error) => {
      console.error('Error in GitHub Analyzer:', error.message);
      throw error;
    });
}

// Example usage with promise chaining
analyzeGitHubUser('Kipngenocodes')
  .then((result) => {
    console.log('\nAnalysis completed successfully for Kipngenocodes!');
  })
  .catch((error) => {
    console.error('Analysis failed for Kipngenocodes:', error.message);
  });

// Demonstrate error case with invalid user
analyzeGitHubUser('invalid-user-12345')
  .then((result) => {
    console.log('\nAnalysis completed successfully for invalid-user-12345!');
  })
  .catch((error) => {
    console.error('Analysis failed for invalid-user-12345:', error.message);
  });