import { describe, expect, test } from '@jest/globals'
import { multiply, division, addition, subtraction } from './calc'

const x: number = 2
const y: number = 5
var testString: string = ''

describe('multiply based on 2 numbers', () => {
    testString = x + ' * ' + y
    test(testString, () => {
        expect(multiply(x, y)).toBe(10)
    })
    testString = x + ' * ' + -y
    test(testString, () => {
        expect(multiply(x, -y)).toBe(-10)
    })
    testString = -x + ' * ' + -y
    test(testString, () => {
        expect(multiply(-x, -y)).toBe(10)
    })
})

describe('divide based on 2 numbers', () => {
    testString = x + ' / ' + y
    test(testString, () => {
        expect(division(x, y)).toBe(0.4)
    })
    testString = x + ' / ' + -y
    test(testString, () => {
        expect(division(x, -y)).toBe(-0.4)
    })
    testString = -x + ' / ' + -y
    test(testString, () => {
        expect(division(-x, -y)).toBe(0.4)
    })
})

describe('Addition based on 2 numbers', () => {
    testString = x + ' + ' + y
    test(testString, () => {
        expect(addition(x, y)).toBe(7)
    })
    testString = x + ' + ' + -y
    test(testString, () => {
        expect(addition(x, -y)).toBe(-3)
    })
    testString = -x + ' + ' + -y
    test(testString, () => {
        expect(addition(-x, -y)).toBe(-7)
    })
})

describe('Subtraction based on 2 numbers', () => {
    testString = x + ' - ' + y
    test('2 - 5', () => {
        expect(subtraction(x, y)).toBe(-3)
    })
    testString = x + ' - ' + -y
    test(testString, () => {
        expect(subtraction(x, -y)).toBe(7)
    })
    testString = -x + ' - ' + -y
    test(testString, () => {
        expect(subtraction(-x, -y)).toBe(3)
    })
})
