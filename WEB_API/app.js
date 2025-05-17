self.onmessage = function(e) {
    let count = e.data.start;
    const max = e.data.max;
    while (count <= max) {
        self.postMessage(count);
        count++;
        // Simulate work with a small delay
        const startTime = Date.now();
        while (Date.now() - startTime < 100) {}
    }
    self.postMessage('Worker finished');
};