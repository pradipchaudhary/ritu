function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}


const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");
const deposit = document.querySelector("#deposit");

const withdrawForm = document.querySelector("#withdrawForm");
const myaccountNumber = document.querySelector("#myaccountNumber");
const withdraw = document.querySelector("#withdraw");
console.log(withdraw.value);

// Create Account
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
});

// Deposite Amount
depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+deposit.value);
});

// Withdraw Amount
withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +myaccountNumber.value
  );
  account.withdraw(+withdraw.value);
});

console.log(BankAccount);
