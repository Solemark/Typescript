import { checkPalindrome } from './check_palindrome'

const getData = (): [string[], boolean[]] => [
    ['DAD', 'Dad', 'ABCDCBA', 'ABCDcba'],
    [true, false, true, false],
]

test('check if is palindrome', () => {
    let [input, result] = getData()
    for (let i = 0; i < input.length; i++) {
        expect(checkPalindrome(input[i])).toBe(result[i])
    }
})
