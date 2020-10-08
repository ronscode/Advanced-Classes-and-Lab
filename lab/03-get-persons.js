class Person {
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
	static getPeople() {
		return [
			new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
			new Person("Kingsland University", "", "", ""),
			new Person("Stephan", "Johnson", 25, ""),
			new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"),
		];
	}
}
//let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");

//console.log(Person.getPeople());

function main() {
	return [
		new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
		new Person("Kingsland University", "", "", ""),
		new Person("Stephan", "Johnson", 25, ""),
		new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"),
	];
}

//let persons = main();
console.log(Person.getPeople());

//persons.forEach((person) => console.log(person.toString()));

//console.log(persons);
