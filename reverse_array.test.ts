import { reverseArray, reverseSingleArray } from './reverse_array'

const getData = (): number[][] => [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

test('reverse array with second array', () => {
    let input: number[][] = getData()
    input.forEach((item) => {
        expect(reverseArray(item)).toEqual(item.reverse())
    })
})

test('reverse array with single array', () => {
    let input: number[][] = getData()
    input.forEach((item) => {
        expect(reverseSingleArray(item)).toEqual(item.reverse())
    })
})
