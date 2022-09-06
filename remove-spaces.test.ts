import { describe, expect, test } from '@jest/globals'
import { removeSpaces } from './remove-spaces'

var str: string = 'Hello  world!    How     are      you      today?'

describe('Remove spaces from string', () => {
    test('Remove spaces from Hello World string', () => {
        expect(removeSpaces(str)).toBe('Helloworld!Howareyoutoday?')
    })
})
