
Node.js Architecture

Node.js is a  runtime environment  that allows JavaScript to run outside the browser. Its architecture is designed to handle  highly concurrent, I/O-heavy workloads  efficiently using  non-blocking, event-driven programming .

At a high level, Node.js consists of:

   JavaScript Engine (V8) 
   Node.js Core APIs 
   Native Bindings 
   Event Loop 
   libuv 
   Thread Pool 
   Worker Threads 

All these pieces work together to give Node.js its performance and scalability.

  JavaScript Engine (V8) 

V8 is the  JavaScript engine developed by Google  (used in Chrome). Node.js uses V8 to  execute JavaScript code .V8  only understands JavaScript . It does not know anything about files, networking, or the OS.

  Parses JavaScript code
  Compiles it to  machine code  (Just-In-Time compilation)
  Manages memory using  garbage collection 
  Executes JavaScript on a  single main thread 


  Node.js Core APIs 

Node.js Core APIs are  built-in modules  that provide access to system-level features.They allow JavaScript to interact with the  operating system , which is something browsers normally restrict.

  Examples

  `fs` → file system
  `http` → networking
  `path`, `os`, `crypto`, `timers`, etc.


  Native Bindings 


Native bindings act as a  bridge  between JavaScript (V8) and Native C/C++ code (libuv & OS) JavaScript cannot directly call C/C++ code. Native bindings enable Node.js to: Call libuv functions  Access OS features like files, sockets, and threads.


  Event Loop 

The Event Loop is the  core mechanism  that allows Node.js to perform  non-blocking I/O  while running JavaScript in a  single thread .Continuously checks for pending tasks Executes callbacks when operations complete
Coordinates timers, I/O callbacks, and promises
Node.js does  not  wait for operations like file reads or network calls to finish.


  libuv 

libuv is a  C library  that provides

  Event loop implementation
  Asynchronous I/O
  Thread pool
  Cross-platform OS abstraction

  Why Node.js needs libuv

Different operating systems handle async operations differently. libuv hides OS differences, Provides a  consistent async interface, Enables Node.js to be cross-platform

  Responsibilities of libuv

  Managing the  event loop 
  Handling asynchronous I/O
  Managing the  thread pool 
  Scheduling timers
  Handling sockets and file descriptors

  Thread Pool 

  1.What is a thread pool?

A thread pool is a  set of background threads  used to execute  blocking or CPU-intensive tasks  without blocking the main thread.

  2. Why Node.js uses a thread pool

Some operations  cannot be made non-blocking by the OS ,would block the event loop if run on the main threadSo Node.js offloads them to the thread pool. But JavaScript code  does not run  in the thread pool.


  Operations handled by the thread pool

  File system operations (`fs`)
  DNS lookups
  Crypto operations (`crypto.pbkdf2`, `bcrypt`)
  Compression (`zlib`)

  Worker Threads 

 1. What are worker threads?

Worker threads are  actual JavaScript threads  that can run JavaScript code in parallel.

 2.Why worker threads are needed.?

  Node.js is single-threaded by default. Worker threads are used when
  Heavy CPU-bound tasks would block the event loop
  Parallel JavaScript execution is required, Image processing ,Machine learning .Large data transformations


Each worker thread:

  Has its own V8 instance
  Has its own event loop
  Communicates via messages (`postMessage`)

 
  Event Loop Queues 

The Event Loop processes different queues in a  specific order 

  Macro Task Queue 

Tasks scheduled for  future execution .

  `setTimeout`
  `setInterval`
  `setImmediate`
  I/O callbacks
  `setImmediate`

  Micro Task Queue 

Tasks that must be executed  immediately after the current operation .

  Examples

  `Promise.then()`
  `Promise.catch()`
  `queueMicrotask()`
  `process.nextTick()` (Node-specific, highest priority)

 

  Execution Priority 

Execution order:

1.  process.nextTick queue 
2.  Microtask queue (Promises) 
3.  Macrotask queue 

This means:

  Microtasks always run  before  macrotasks
  `process.nextTick()` runs  before everything else 

 

  Examples of Queue Behavior 

```js
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));
```


