import { describe, expect, test } from '@jest/globals'
import { sumArray } from './sum-array'

var a1: number[] = [1, 2, 3, 4, 5]
var a2: number[] = [-5, -12, 23, 62, -100, 71]

describe('Sum total values of array', () => {
    test('return sum of the array', () => {
        expect(sumArray(a1)).toBe(15)
    })
    test('correctly handle negative numbers in array', () => {
        expect(sumArray(a2)).toBe(39)
    })
})
