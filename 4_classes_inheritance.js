// Inheritance in Class

class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.bankAccount = Date.now();
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
  constructor(customerName, balance, accountType) {
    super(customerName, balance);
    this.accountType = accountType;
  }

  takeBusinessLoan(amount) {
    console.log(`Take Business Loan : ` + amount);
  }
}

// const ramAccount = new BankAccount("Ram Rai", 5000);
// console.log(ramAccount);
// ramAccount.deposite(100);
// console.log(ramAccount);
// ramAccount.withdraw(500);
// console.log(ramAccount);

const ramAccount = new CurrentAccount("Ram Rai", 5000, "Current A/C");
ramAccount.deposite(200);
ramAccount.withdraw(500);
ramAccount.takeBusinessLoan(1020);
console.log(ramAccount);
