// Microtasks in JS are small functions that are executed after the completion of thhe function or program code that create them and it the JS execution stack is is empty.
// They are used to perform operations that need to be done after the current code has finished executing
// Microtasks are executed before any macrotasks, such as setImmediate() and setTimeout().
//  Microtasks are used to implement features such as promises.

/*JavaScript runs the code based on the event loop. The event loop is responsible for executing the code, processing it, 
collecting the event data, and executing the sub-tasks. The event loop is a single-threaded loop that runs continuously, checking for tasks to execute. 
The event loop is responsible for executing the code, processing it, collecting the event data, and executing the sub-tasks.
The event loop is a single-threaded loop that runs continuously, checking for tasks to execute. */  