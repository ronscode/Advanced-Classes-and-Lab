class Person {
	constructor(firstName, lastName, age, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.email = email;
	}
	toString() {
		return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
		//return `` ${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})
	}
	// ! optional static method !
	//static getPeople() {
	// 	return [
	// 		new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
	// 		new Person("Kingsland University"),
	// 		new Person("Stephan", "Johnson", 25),
	// 		new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"),
	// 	];
	// }
}


function main() {
	// function > returning > [ an, array ] of objects (from the class factory)
	return [
		new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
		new Person("Kingsland University"),
		new Person("Stephan", "Johnson", 25),
		new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"),
	];
}

//let somePerson = new Person("Anna", "Simpson", "22", "anna@yahoo.com");
//console.log(somePerson.toString());

let persons = main();
persons.forEach((person) => console.log(person.toString()));
