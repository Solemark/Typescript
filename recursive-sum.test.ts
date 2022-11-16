import { describe, expect, test } from '@jest/globals'
import { sum, sumArray } from './recursive-sum'

describe('tests the sum function', () => {
    test('check if the total of the sum function is not null', () => {
        expect(sum(1, 0)).not.toEqual(undefined)
    })
    test('sums all values between 7 and 0', () => {
        expect(sum(1, 0)).toBe(1)
    })
})

describe('tests the sumArray function', () => {
    test('sums the first 7 values in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 0)).toBe(36)
    })
})
