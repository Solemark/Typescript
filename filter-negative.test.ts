import { describe, expect, test } from '@jest/globals'
import { filterNegative } from './filter-negative'

var a1: number[] = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10]

describe('Remove odd numbers from sequence', () => {
    test('Print 2, 4, 6, 8, 10', () => {
        expect(filterNegative(a1)).toEqual([2, 3, 4, 6, 7, 9, 10])
    })
})
