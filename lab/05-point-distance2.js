class Point {
	// this is my class, a JS class is an object factory
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	static distance(point1, point2) {
		// each "Point" will be an object with key value pairs for the x and y
		let distX = point1.x - point2.x;
		let distY = point1.y - point2.y;
		// //return Math.sqrt(distX ** 2 + distY ** 2);
		return Math.hypot(distX, distY);
	}
}

// Input from HW grader

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Object.keys(p1), p1.distance); //for testing early on in the programing
//console.log(Point.distance(p1, p2));
console.log(Point.distance(p1, p2));
