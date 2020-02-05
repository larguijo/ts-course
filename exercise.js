console.group("EXERCISES");
var bankAccount = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: "Luis",
    bankAccount: bankAccount,
    hobbies: ['Sports', "Cooking"]
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
mySelf.hobbies.push("Hiking");
console.log(mySelf);
console.groupEnd();
// function controlMe(isTrue: boolean, other:string){
//   return isTrue;
// }
console.group("DEFAULT PARAMETER VALUES, REST AND SPREAD OPERATORS");
var countDown = function (start) {
    if (start === void 0) { start = 1; }
    while (start > 0) {
        console.log(start);
        start--;
    }
};
countDown(3);
// Using rest operator turns an array into a comma separated list.
var myNumbers = [3, 5, 99, -3];
console.log('my Array', myNumbers);
console.log('Max', Math.max(3, 4, 9, -2));
console.log('using rest operator tu pass array as comma separated argumentes to "max" function.', Math.max.apply(Math, myNumbers));
var myArrayFunction = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log('Using rest in a function parameter', myArrayFunction(3, 2, 1));
// Array Destructuring
var myHobbies = ["Sports", "Music"];
var hobbie1 = myHobbies[0], hobbie2 = myHobbies[1];
console.log("My favorite hobbie is " + hobbie1 + " and " + hobbie2 + " goes next");
console.groupEnd();
