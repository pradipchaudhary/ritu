function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposite = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

function CurrentAccount(customerName, balance = 0) {
  BankAccount.call(this, customerName, balance);
  this.transationLimit = 100;
}

// Method One
CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log(`Take Business Loan : ` + amount);
};
// CurrentAccount.prototype = new BankAccount();
// CurrentAccount.prototype.constructor = CurrentAccount;

const ramAccount = new CurrentAccount("Ram Rai", 1000);
console.log(ramAccount);
ramAccount.deposite(100);
console.log(ramAccount);
ramAccount.withdraw(50);
ramAccount.takeBusinessLoan(100);
console.log(ramAccount);
