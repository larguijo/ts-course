console.group("EXERCISES ROUND 2");
// Exercise 1 - Maybe use an Arrow Function?
const double = (v1: number): number => v1 * 2;
console.log(double(40));

// Exercise 2 - If only we could provide some default values...
const greet = (name: string = "Luis"): void => {
  console.log(`Hello, ${name}`);
}

greet();
greet("gurl");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers: number[] = [-3, 33, 38, 5];
console.log('Min: ', Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
const newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log('Pushing with rest:', newArray);

// Exercise 5 - That's a well-constructed array.
// Array destructuring
const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log('Array Destructuring', result1, result2, result3);

// Exercise 6 - And a well-constructed object!
const scientist: { firstName: string, experience: number } = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);

console.groupEnd();