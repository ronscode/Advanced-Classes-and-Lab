class Circle {
	constructor(radius) {
		// "radius is now === the num 2 from line 17
		this.radius = radius;
	}
	get diameter() {
		return this.radius * 2;
	}
	set diameter(diameter) {
		this.radius = diameter / 2;
		//console.log("this dot radius ", this);
	}
	get area() {
		return Math.PI * this.radius * this.radius;
	}
}

let c = new Circle(2);
console.log(c);
console.log(`Radius: ${c.radius}`, `no diameter key:value unless we "get" it`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log("the changed c should be ", c);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
