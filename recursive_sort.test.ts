import { sortRecursive } from './recursive_sort'

test('sort array recursively', () => {
    expect(sortRecursive([5, 2, 9, 7, 14, 8], 0)).toEqual([2, 5, 7, 8, 9, 14])
})
