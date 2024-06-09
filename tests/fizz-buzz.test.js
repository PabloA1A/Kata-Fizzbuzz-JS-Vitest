import { describe, expect, it } from "vitest";
import { FizzBuzz } from "../src/fizz-buzz";

describe('FizzBuzz class', () => {
    it('number divisible by three should return <Fizz>', () => {
        const num = 3;
        const expected = 'Fizz';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('number divisible by five should return <Buzz>', () => {
        const num = 5;
        const expected = 'Buzz';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('number divisible by both three and five should return <FizzBuzz>', () => {
        const num = 15;
        const expected = 'FizzBuzz';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('number not divisible by three or five should return the number as a string', () => {
        const num = 7;
        const expected = '7';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('number containing 3 should return <Fizz>', () => {
        const num = 13;
        const expected = 'Fizz';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('number containing 5 should return <Buzz>', () => {
        const num = 52;
        const expected = 'Buzz';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('number containing 3 and 5 should return <FizzBuzz>', () => {
        const num = 53;
        const expected = 'FizzBuzz';
        const result = FizzBuzz.fizzbuzz(num);
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('should throw error if input is not a number', () => {
        const num = 'abc';
        expect(() => FizzBuzz.fizzbuzz(num)).toThrow('Parameter should be a number');
    });
});