class Person {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

class Teacher extends Person {
	constructor(name, email, subject) {
		super(name);
		this.email = email;
		this.subject = subject;
	}
}

let somePerson = new Person("Anna", "anna@notyahoo.com");
console.log(somePerson);
let someTeacher = new Teacher("Ron", "ron@ku.com", "Not smashing your laptop");
console.log(someTeacher);
console.log("Teachers first name is ", someTeacher.name, someTeacher.email);
