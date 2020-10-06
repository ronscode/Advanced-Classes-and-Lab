class Rectangle {
	// THIS does not exist yet
	constructor(heightValue, widthValue, colorValue) {
		this.height = heightValue; // { height: 4,  }
		this.width = widthValue; // {  width: 5 }
		this.color = colorValue; // {  color: 'red' }
	}
	calcArea() {
		console.log(this.height * this.width);
		console.log("this is ", this);
		return this;
	}
} // "THIS" (the reference not the actual thing) STILL DOEST NOT EXIST YET

let rect = new Rectangle(4, 5, "red"); // this now exists as only this key.
let madeUpVar = new Rectangle("cat", "dog", "fish");
console.log("made up var is ", madeUpVar);

// let Rectangle = class Rectangle {
// 	constructor(height, width, color) {
// 		this.height = height;
// 		this.width = width;
// 		this.color = color;
// 	}
// };

console.log("From the class the rect is ", rect);
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea()); // 20

// class MakeStudent {
// 	constructor(name, age, house) {
// 		this.name = name;
// 		this.age = age;
// 		this.house = house;
// 	}
// }
// let firstStudent = new MakeStudent("Zaphod", "40000", "Rising Son");
// console.log(firstStudent);
