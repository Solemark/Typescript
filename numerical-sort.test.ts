import { describe, expect, test } from '@jest/globals'
import { numericalSort } from './numerical-sort'

const a1: number[] = [5, 2, 1, 3, 6, 4, 10, 9, 8, 7]

describe('perform a numerical sort', () => {
    test('do a numerical sort on an array', () => {
        expect(numericalSort(a1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})
