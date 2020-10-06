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
}
let somePerson = new Person("Anna", "Simpson", "22", "anna@yahoo.com");
//console.log(someGuy);
console.log(somePerson.toString());

//let someArray = [1, 2, 3];
// let someString = "1, 2, 3";

//console.log(someArray.toString());
// someArray.toUppercase()
