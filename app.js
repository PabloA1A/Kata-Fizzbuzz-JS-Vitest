import { FizzBuzz } from './src/fizz-buzz.js';

function printFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(FizzBuzz.fizzbuzz(i));
    }
}

printFizzBuzz();