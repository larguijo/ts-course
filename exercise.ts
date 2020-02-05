console.group("EXERCISES");

type BankAccount = {
  money: number,
  deposit: (v: number) => void
}

type Person = {
  name: string,
  bankAccount: BankAccount,
  hobbies: string[]
}

let bankAccount: BankAccount = {
  money: 200,
  deposit(value) {
    this.money += value;
  }
};

let mySelf: Person = {
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
const countDown = (start: number = 1): void => {
  while (start > 0) {
    console.log(start);
    start--;
  }
}

countDown(3);

// Using rest operator turns an array into a comma separated list.

const myNumbers = [3, 5, 99, -3];
console.log('my Array', myNumbers);
console.log('Max', Math.max(3, 4, 9, -2));
console.log('using rest operator tu pass array as comma separated argumentes to "max" function.', Math.max(...myNumbers));

const myArrayFunction = (...args: number[]): number[] => args;
console.log('Using rest in a function parameter', myArrayFunction(3, 2, 1));

// Array Destructuring
const myHobbies = ["Sports", "Music"];
const [hobbie1, hobbie2] = myHobbies;
console.log(`My favorite hobbie is ${hobbie1} and ${hobbie2} goes next`);

console.groupEnd();