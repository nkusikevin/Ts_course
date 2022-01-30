class Vehicle {
	color: string;
	weight: number;
	price: number;
    vname:string;

	constructor(color: string,name:string, weight: number, price: number) {
		this.color = color;
		this.weight = weight;
		this.price = price;
        this.vname = name
	}
	public brand(
	): void {
		console.log(`
        Brand is:${this.vname}  
        The weight is ${this.weight}
        The Price is ${this.price}
        It's Color is ${this.color}
        `);
	}
}


const color:string = "Black"
const weight:number = 3000
const price:number = 1500000
const vname:string = "Benz"
const vehicle = new  Vehicle(color,vname,weight,price);
vehicle.brand()


// class Car extends Vehicle {}

// const toyota = new Car();
// toyota.brand("RAVA 4");
