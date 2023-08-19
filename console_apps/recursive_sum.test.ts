import { sum, sumArray } from './recursive_sum'

test('sum numbers to max recursively', () => {
    expect(sum(1, 0)).toEqual(1)
})

test('sum array values to key', () => {
    expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 0)).toEqual(36)
})
