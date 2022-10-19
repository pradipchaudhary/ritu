// Class in OOP
console.log("Class... ");

class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const ramAccount = new BankAccount("Pradip Chaudhary", 500);
console.log(ramAccount);
ramAccount.deposit(200);
console.log(ramAccount);
