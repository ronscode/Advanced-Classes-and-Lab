class PersonRecord {
	constructor(firstName, lastName, age, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.email = email;
	}
	toString() {
		console.log(`
    ${this.firstName} ${this.lastName} (${this.age} ${this.email})`);
		return this;
	}
}

let person = new PersonRecord("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString());

console.log("the person is ", person);
