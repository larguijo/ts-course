console.group("DATA TYPES");
console.log("It works!");

let myName: string;
myName = 'Luis';

let isGood: boolean = false;

console.log(myName);
console.log(isGood);

let hobbies = ["Cookies", "Chicken"];
console.log(hobbies[0]);

enum Color {
  red,
  green,
  blue
}

const myColor = Color.green;
console.log(myColor);

let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

console.groupEnd();
console.group("FUNCTIONS");
const sayHello = (): void => console.log("hello");

const returnMyName = (): string => {
  return myName;
}

const multiply = (value1: number, value2: number): number => value1 * value2;

// Assigning function to a variable.
let myDynamicFunction;
myDynamicFunction = multiply;
console.log(myDynamicFunction(10, 2));

// Overriding myDinamic Function
myDynamicFunction = sayHello;
myDynamicFunction();

console.log(returnMyName());
console.log(multiply(5.9, 2));

// This is just a declaration that the assigned value should be a function that receives two numbers and returns a number
let myTwoArgsFunction: (val1: number, val2: number) => number;
myTwoArgsFunction = multiply;
console.log(myTwoArgsFunction(3, 25));

console.groupEnd();
console.group("OBJECTS");
//It creates a type with id as number and name as string.
let person = {
  id: 100,
  name: "Luis"
};

// person = []; // This will throw compilation error.
// person.name = 20; // This will also throw compilation error.
console.log(person.id, person.name);

// let product: { name: string, id: string } = 'x'; // Fails
let product: { name: string, id: string } = {
  name: 'Computer',
  id: 'String'
}

// Complex object.
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [10, 20, 30],
  output: function (all: boolean): number[] {
    // return 0; // Fails
    return all ? this.data : [];
  }
}

console.log(complex.output(true));

console.groupEnd();
console.group("ALIASES, UNION TYPES AND NULLS");
// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
  data: [100, 200, 300],
  output: function (all) {
    return all ? this.data : [];
    // return "X"; // Fails
  }
}

console.log(complex2.output(true));

// Union types.
let myRealAge: number | string = 31;
myRealAge = "31";
// myRealAge = { age: 30 }; //Fails
console.log(myRealAge);

// Nullable
let canBeNull: number | null; // strictNullChecks: true
canBeNull = 10;
console.log(canBeNull);
canBeNull = null;
console.log(canBeNull);
// canBeNull = "A"; // Error: if noEmitError is false this still compiles, regardless of the error.

console.groupEnd();

class People {
  name: string;
  private type: string;
  protected age: number = 28;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log('age', this.age);
  }
}

console.group("CLASES");
const people = new People("Luigui", "luisr");
console.log(people.name, people.username);
people.printAge();

class Luis extends People {
  name = "Luis";
  constructor(username: string) {
    super("Luis", username);
    this.age = 31;
  }
}

const luis = new Luis("luisn");
console.log(luis);

////// GETTTER AND SETTERS

class Plant {
  private _species: string = 'DEFAULT';

  get species() {
    return this._species;
  }

  set species(value: string) {
    this._species = (value.length > 3) ? value : 'Default';
  }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);

// STATIC METHODS.
class Helpers {
  static PI: number = 3.14;
  static calcCircunference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log('PI', Helpers.PI);
console.log('Circunference', Helpers.calcCircunference(5));

console.groupEnd();