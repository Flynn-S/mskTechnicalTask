const User = require("./task1.js");

describe("User", () => {
  it("should return true if the user is a direct reportee", () => {
    const manager = new User("Manager");
    const employee = new User("Employee");
    manager.reports.push(employee);
    expect(manager.isSeniorToUserNamed("Employee")).toBe(true);
  });

  it("should return false if the user is not a report", () => {
    const manager = new User("Manager");
    const employee = new User("Employee");
    expect(employee.isSeniorToUserNamed("Manager")).toBe(false);
  });

  it("should return true if the user is an indirect reportee", () => {
    const ceo = new User("CEO");
    const manager = new User("Manager");
    const employee = new User("Employee");
    ceo.reports.push(manager);
    manager.reports.push(employee);
    expect(ceo.isSeniorToUserNamed("Employee")).toBe(true);
  });
});
