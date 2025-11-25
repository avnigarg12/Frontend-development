// Q2 – Task Scheduler (Micro vs Macro)

console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then()");
});

console.log("Synchronous log");

console.log("End");

// Microtasks run before macrotasks because JS event loop executes the microtask queue
// right after current script execution, before moving to the macrotask queue.
