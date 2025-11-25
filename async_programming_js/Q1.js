// Q1 – Async Coffee Maker (Promise chaining)
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Boiling failed!");
      console.log("Water boiled");
      resolve();
    }, 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Brewing failed!");
      console.log("Coffee brewed");
      resolve();
    }, 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Pouring failed!");
      console.log("Coffee poured");
      resolve();
    }, 1200);
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(() => console.log("Coffee ready for the team!"))
  .catch(err => console.error("Error:", err));
