export function fizzbuzz(n) {
    if (typeof n !== 'number') {
        throw new Error('Parameter should be a number');
    }

    const contains3 = n.toString().includes('3');
    const contains5 = n.toString().includes('5');
    let result = '';

    if ((n % 3 === 0 && n % 5 === 0) || (contains3 && contains5)) {
        result = 'FizzBuzz';
    } else if (n % 3 === 0 || contains3) {
        result = 'Fizz';
    } else if (n % 5 === 0 || contains5) {
        result = 'Buzz';
    } else {
        result = n.toString();
    }

    return result;
}
