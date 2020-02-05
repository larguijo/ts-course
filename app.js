var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.group("DATA TYPES");
console.log("It works!");
var myName;
myName = 'Luis';
var isGood = false;
console.log(myName);
console.log(isGood);
var hobbies = ["Cookies", "Chicken"];
console.log(hobbies[0]);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var myColor = Color.green;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
console.groupEnd();
console.group("FUNCTIONS");
var sayHello = function () { return console.log("hello"); };
var returnMyName = function () {
    return myName;
};
var multiply = function (value1, value2) { return value1 * value2; };
// Assigning function to a variable.
var myDynamicFunction;
myDynamicFunction = multiply;
console.log(myDynamicFunction(10, 2));
// Overriding myDinamic Function
myDynamicFunction = sayHello;
myDynamicFunction();
console.log(returnMyName());
console.log(multiply(5.9, 2));
// This is just a declaration that the assigned value should be a function that receives two numbers and returns a number
var myTwoArgsFunction;
myTwoArgsFunction = multiply;
console.log(myTwoArgsFunction(3, 25));
console.groupEnd();
console.group("OBJECTS");
//It creates a type with id as number and name as string.
var person = {
    id: 100,
    name: "Luis"
};
// person = []; // This will throw compilation error.
// person.name = 20; // This will also throw compilation error.
console.log(person.id, person.name);
// let product: { name: string, id: string } = 'x'; // Fails
var product = {
    name: 'Computer',
    id: 'String'
};
// Complex object.
var complex = {
    data: [10, 20, 30],
    output: function (all) {
        // return 0; // Fails
        return all ? this.data : [];
    }
};
console.log(complex.output(true));
console.groupEnd();
console.group("ALIASES, UNION TYPES AND NULLS");
var complex2 = {
    data: [100, 200, 300],
    output: function (all) {
        return all ? this.data : [];
        // return "X"; // Fails
    }
};
console.log(complex2.output(true));
// Union types.
var myRealAge = 31;
myRealAge = "31";
// myRealAge = { age: 30 }; //Fails
console.log(myRealAge);
// Nullable
var canBeNull; // strictNullChecks: true
canBeNull = 10;
console.log(canBeNull);
canBeNull = null;
console.log(canBeNull);
// canBeNull = "A"; // Error: if noEmitError is false this still compiles, regardless of the error.
console.groupEnd();
var People = /** @class */ (function () {
    function People(name, username) {
        this.username = username;
        this.age = 28;
        this.name = name;
    }
    People.prototype.printAge = function () {
        console.log('age', this.age);
    };
    return People;
}());
console.group("CLASES");
var people = new People("Luigui", "luisr");
console.log(people.name, people.username);
people.printAge();
var Luis = /** @class */ (function (_super) {
    __extends(Luis, _super);
    function Luis(username) {
        var _this = _super.call(this, "Luis", username) || this;
        _this.name = "Luis";
        _this.age = 31;
        return _this;
    }
    return Luis;
}(People));
var luis = new Luis("luisn");
console.log(luis);
////// GETTTER AND SETTERS
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'DEFAULT';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = (value.length > 3) ? value : 'Default';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);
// STATIC METHODS.
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircunference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log('PI', Helpers.PI);
console.log('Circunference', Helpers.calcCircunference(5));
console.groupEnd();
