class Vehicle{
    constructor(brand, model, year, color) {
        // console.log("This is a vehicle class with a color " + color);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayType(){
        console.log(``);
    }

    displayBrandModel(){
        const message = `Brand: ${this.brand}\nModel: ${this.model}`
        document.querySelector("#demo").textContent = message;
        document.querySelector("#powered").textContent = this.getPropulsion();
    }

    getPropulsion(){
        return "Electric Powered";
    }
    
}

var car = new Vehicle("Tesla", "Model", 2000, "black");
car.displayBrandModel();
// console.log(car.getPropulsion());



// class Honda extends Vehicle{
//     constructor(brand, model, year, color) {
//         super(brand, model, year, color);
//         console.log("This is a honda vehicle");
//     }
// }

// // var car2 = new Honda("red");

// class Tesla extends Vehicle {
//     constructor(brand, model, year, color) {
//         super(brand, model, year, color);

//     }
// }

// var car3 = new Tesla(brand, model, year, color);
// car3.getPropulsion

