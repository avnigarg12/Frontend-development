// Q4 – DevOps Delay: Promise.all & Promise.race

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Server A failed!");
      resolve("Server A completed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Server B failed!");
      resolve("Server B completed");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.error(err));

Promise.race([serverA(), serverB()])
  .then(fastest => console.log("Fastest response:", fastest))
  .catch(err => console.error(err));
