// Static
console.log("Static Function ");

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }
}

const user1 = new User("Pradip Chaudhary", 500);
const user2 = new User("Bidhan Baniya", 600);
const user3 = new User("Dipesh Banjara", 900);
const user4 = new User("Robin Rai", 200);

const users = [user1, user2, user3, user4];
users.sort(User.compareByAge);
console.log(users);

const student = { age: 20, name: "Bob" };
const { age, name } = student;

let userAgent = navigator;
let browserName;

console.log(userAgent);
console.log(browserName);
