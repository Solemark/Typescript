import { describe, expect, test } from '@jest/globals'
import { reverseArray } from './reverse-array'

var a1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('Reverse Array', () => {
    test('return the reversed array', () => {
        expect(reverseArray(a1)).toEqual(a1.reverse())
    })
})
