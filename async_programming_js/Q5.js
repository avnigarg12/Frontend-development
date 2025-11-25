// Q5 – Callback Hell & async/await version

// --- Callback Hell ---
function design(cb) {
  setTimeout(() => { console.log("Design complete"); cb(); }, 1000);
}
function build(cb) {
  setTimeout(() => { console.log("Build complete"); cb(); }, 1000);
}
function test(cb) {
  setTimeout(() => { console.log("Test complete"); cb(); }, 1000);
}
function deploy(cb) {
  setTimeout(() => { console.log("Deploy complete"); cb(); }, 1000);
}
function celebrate(cb) {
  setTimeout(() => { console.log("Celebrate!"); cb(); }, 1000);
}

function startPipelineCallbackHell() {
  design(() => {
    build(() => {
      test(() => {
        deploy(() => {
          celebrate(() => {
            console.log("Pipeline finished (Callback Hell)");
          });
        });
      });
    });
  });
}

// --- Async/Await version ---
function wait(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

async function startPipelineAsync() {
  await wait("Design complete");
  await wait("Build complete");
  await wait("Test complete");
  await wait("Deploy complete");
  await wait("Celebrate!");
  console.log("Pipeline finished (Async/Await)");
}

// Async/await improves readability because code flows top‑down
// like synchronous code, avoiding deep nested callbacks.
