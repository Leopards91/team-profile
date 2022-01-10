const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email, role)
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role = "Manager";
    }
}

module.exports = Manager;