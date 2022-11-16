import { describe, expect, test } from '@jest/globals'
import { sortRecursive } from './recursive-sort'

describe('test recursive sorting', () => {
    test('sort array of [5, 2, 9, 7, 14, 8] -> [2, 5, 7, 8, 9, 14]', () => {
        expect(sortRecursive([5, 2, 9, 7, 14, 8], 0)).toEqual([2, 5, 7, 8, 9, 14])
    })
})
