console.group("EXERCISES ROUND 2");
// Exercise 1 - Maybe use an Arrow Function?
var double = function (v1) { return v1 * 2; };
console.log(double(40));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Luis"; }
    console.log("Hello, " + name);
};
greet();
greet("gurl");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log('Min: ', Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log('Pushing with rest:', newArray);
// Exercise 5 - That's a well-constructed array.
// Array destructuring
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log('Array Destructuring', result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
console.groupEnd();
