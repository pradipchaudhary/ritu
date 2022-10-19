// Encapsulation
console.log("Encapsulation ");

class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }
  deposite(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
    this.transationLimit = 5000;
  }
  takeBusinessLoan(amount) {
    console.log(`Take Business Loan : ` + amount);
  }
}

const newUser = new CurrentAccount("Pradip Chaudhary", 500);
newUser.balance = 1000;
console.log(newUser);
// newUser.takeBusinessLoan(100);
