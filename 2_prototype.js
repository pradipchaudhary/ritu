function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

// Deposite Prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// Withdraw Prototype

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const pradipAccount = new BankAccount("Jon Doe", 5000);
console.log(pradipAccount);

pradipAccount.deposit(500);
console.log(pradipAccount);

pradipAccount.withdraw(100);
console.log(pradipAccount);
