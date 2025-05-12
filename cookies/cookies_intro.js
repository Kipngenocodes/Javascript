// In JavaScript, cookies are piece of data stored in the user's web browser. The cookies are stored in the key-value pair inside the browser.
// The cookies are used to store the user preferences, session information, and other data that needs to be persisted across multiple requests.
// You can manipulate, read, set or store cookies in JavaScript. You can access the cookies using cookie property of document object.

/* Why are cookies are needed in JavaScript?
Cookies are used to store user preferences, session information, and other data that needs to be persisted across multiple requests. They are essential for maintaining the state of the application, tracking user behavior, and providing a seamless user experience. Cookies are also used for authentication, tracking, and other purposes. */

// Cookies are used to store user preferences, session information, and other data that needs to be persisted across multiple requests.
// They are essential for maintaining the state of the application, tracking user behavior, and providing a seamless user experience. 
// Cookies are also used for authentication, tracking, and other purposes.

/*Web Browsers and Servers use HTTP protocol to communicate and HTTP is a stateless protocol. 
But for a commercial website, it is required to maintain session information among different pages.
*/

// using cookies is the most efficient method of remembering and tracking preferences, 
// purchases, commissions, and other information required for better visitor experience or site statistics.

// cookies are also used for caching, increasing the website or application performance.

// How does Cookies work?
/*Your server sends some data to the visitor's browser in the form of a cookie. The browser may accept the cookie.
If it does, it is stored as a plain text record on the visitor's hard drive.
Now, when the visitor arrives at another page on your site, the browser sends the same cookie to the server for retrieval. 
Once retrieved, your server knows/remembers what was stored earlier.*/


// Setting/ Storing Cookies
    /*JavaScript can manipulate cookies using the cookie property of the Document object. 
    JavaScript can read, create, modify, and delete the cookies that apply to the current web page.*/
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// Reading Cookies
    /*You can read the cookie content by assigning it to a variable.
    The decodeURIComponent() function decodes the URL-encoded cookie value.*/
    let cookie = document.cookie;
    let decodedCookie = decodeURIComponent(cookie);
    console.log(decodedCookie);

// Deleting Cookies
    /*You can delete a cookie by setting its expiration date to a past date.*/
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";