class Rectangle {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}
	calcArea() {
		return this.width * this.height;
	}
}
// END HW GRADER

let rect = new Rectangle(4, 5, "red");
console.log(rect.calcArea());

let htmlRectangle = document.getElementById("rectangle");

htmlRectangle.style.width = rect.width * 120 + "px";
htmlRectangle.style.height = `${rect.height * 120}px`;
htmlRectangle.style.backgroundColor = rect.color;
