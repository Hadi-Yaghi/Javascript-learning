class User {
  #s;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#s = eSalary;
  }
  getSalary() {
    return parseInt(this.#s);
  }
}
let userOne = new User(100, "hadi", 550);
console.log(userOne.getSalary()*0.3);
