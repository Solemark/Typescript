import { describe, expect, test } from '@jest/globals'
import { removeCharacters } from './remove-characters'

var s: string = 'Hello! My name is Mason'
var letters: string[] = ['m', '!', ' ']

describe('Remove characters from string', () => {
    test('Removes m, ! and spaces from string', () => {
        expect(removeCharacters(s, letters)).toBe('Helloynaeisason')
    })
})
