import { describe, expect, test } from '@jest/globals'
import { checkPalindrome } from './check-palindrome'

describe('check string for palindrome', () => {
    test('DAD is a palindrome', () => {
        expect(checkPalindrome('DAD')).toBe(true)
    })
    test('Dad is a palindrome', () => {
        expect(checkPalindrome('Dad')).toBe(true)
    })
    test('ABCDCBA is a palindrome', () => {
        expect(checkPalindrome('ABCDCBA')).toBe(true)
    })
    test('ABCDcba is a palindrome', () => {
        expect(checkPalindrome('ABCDcba')).toBe(true)
    })
})

describe('stop check on not palindrome', () => {
    test('1881 is a palindrome', () => {
        expect(checkPalindrome(1881)).toBe(false)
    })
    test('boolean is a palindrome', () => {
        expect(checkPalindrome(true)).toBe(false)
    })
    test('array is a palindrome', () => {
        expect(checkPalindrome([])).toBe(false)
    })
    test('null is a palindrome', () => {
        expect(checkPalindrome(null)).toBe(false)
    })
})
