// Q5 – Ride-Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance <= 0) throw new Error("Invalid distance!");
    return this.distance * 10;
  }
}

try {
  const trip = new Trip("A", "B", 15);
  console.log("Fare:", trip.calculateFare());
} catch (err) {
  console.error(err.message);
}

try {
  const badTrip = new Trip("A", "B", -5);
  console.log(badTrip.calculateFare());
} catch (err) {
  console.error("Error:", err.message);
}
