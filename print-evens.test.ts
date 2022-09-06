import { describe, expect, test } from '@jest/globals'
import { printEvens } from './print-evens'

const max: number = 10

describe('Remove odd numbers from sequence', () => {
    test('Print 2, 4, 6, 8, 10', () => {
        expect(printEvens(max)).toBe('0\n2\n4\n6\n8\n10\n')
    })
})
