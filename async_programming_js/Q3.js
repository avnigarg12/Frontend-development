// Q3 – Bug Tracker: Callback → Promise

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() < 0.3;
      if (failed) return reject("API Error: Failed to fetch bugs");
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.table(bugs);
  })
  .catch(err => console.error(err));
