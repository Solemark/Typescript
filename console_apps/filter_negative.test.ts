import { filterNegative } from './filter_negative'

test('remove negative values from array', () => {
    const a1: number[] = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10]
    expect(filterNegative(a1)).toEqual([2, 3, 4, 6, 7, 9, 10])
})
