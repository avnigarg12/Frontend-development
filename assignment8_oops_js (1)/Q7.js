// Q7 – Banking Application

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid deposit amount");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(5000);
console.log("Balance:", acc.getBalance());

try {
  acc.withdraw(10000);
} catch (err) {
  console.error("Error:", err.message);
}
