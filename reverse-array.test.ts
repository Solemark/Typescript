import { describe, expect, test } from '@jest/globals'
import { reverseArray, reverseSingleArray } from './reverse-array'

var a1: number[] = []

describe('Reverse Array (1-10)', () => {
    test('return the reversed array (10-1)', () => {
        a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(reverseArray(a1)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
})

describe('Reverse Array (1-9)', () => {
    test('return the reversed array (9-1)', () => {
        a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(reverseArray(a1)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
})

describe('Reverse Single Array (1-10)', () => {
    test('return the reversed single array (10-1)', () => {
        a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(reverseSingleArray(a1)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
})

describe('Reverse Single Array (1-9)', () => {
    test('return the reversed single array (9-1)', () => {
        a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(reverseSingleArray(a1)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
})
