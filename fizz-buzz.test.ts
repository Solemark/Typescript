import { describe, expect, test } from '@jest/globals'
import { fizzBuzz } from './fizz-buzz'

const max: number = 20
const fizz: number = 3
const buzz: number = 5

describe('Play FizzBuzz', () => {
    test('Check if FizzBuzz returns the correct string', () => {
        expect(fizzBuzz(max, fizz, buzz)).toBe('1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\n')
    })
})
