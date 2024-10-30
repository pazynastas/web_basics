// Базовий клас Vehicle
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    getType() {
        return 'Загальний транспортний засіб';
    }
}

// Похідний клас Car
class Car extends Vehicle {
    constructor(brand, model, year, color) {
        super(brand, model, year);
        this.color = color;
    }

    getType() {
        return 'Легковий автомобіль';
    }

    getColor() {
        return `Цей автомобіль ${this.color} кольору.`;
    }
}

// Похідний клас Motorcycle
class Motorcycle extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }

    getType() {
        return 'Мотоцикл';
    }

    getMotorcycleType() {
        return `Цей мотоцикл типу ${this.type}.`;
    }
}

// Використання класів
const vehicle = new Vehicle("Generic", "Model", 2022);
console.log(vehicle.getInfo());
console.log(vehicle.getType()); 

const car = new Car("Toyota", "Camry", 2021, "чорного");
console.log(car.getInfo());
console.log(car.getType());
console.log(car.getColor());

const motorcycle = new Motorcycle("Honda", "CBR600RR", 2020, "спорт");
console.log(motorcycle.getInfo());
console.log(motorcycle.getType());
console.log(motorcycle.getMotorcycleType());
