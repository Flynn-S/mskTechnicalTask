class User {
  constructor(name) {
    this.name = name;
    this.reports = [];
  }

  isSeniorToUserNamed(userName) {
    if (this.name.toLowerCase() === userName.toLowerCase()) {
      return true;
    } else {
      for (let i = 0; i < this.reports.length; i++) {
        if (this.reports[i].isSeniorToUserNamed(userName)) {
          return true;
        }
      }
      return false;
    }
  }
}

const tim = new User("Tim");
const dom = new User("Dom");
const inga = new User("Inga");
const flynn = new User("Flynn");

tim.reports.push(inga, dom);
inga.reports.push(flynn);
dom.reports.push(flynn);

console.log(tim.isSeniorToUserNamed("Inga")); // true
console.log(inga.isSeniorToUserNamed("Flynn")); // true
console.log(tim.isSeniorToUserNamed("Flynn")); // true
console.log(flynn.isSeniorToUserNamed("Dom")); // false

module.exports = User;
