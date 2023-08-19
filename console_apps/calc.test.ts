import { multiply, division, addition, subtraction } from './calc'

const getData = (): number[][] => [
    [5, 5],
    [5, -5],
    [-5, -5],
]

test('add y to x', () => {
    let data: number[][] = getData()
    data.forEach((item) => {
        expect(addition(item[0], item[1])).toBe(item[0] + item[1])
    })
})

test('subract y from x', () => {
    let data: number[][] = getData()
    data.forEach((item) => {
        expect(subtraction(item[0], item[1])).toBe(item[0] - item[1])
    })
})

test('multiply x by y', () => {
    let data: number[][] = getData()
    data.forEach((item) => {
        expect(multiply(item[0], item[1])).toBe(item[0] * item[1])
    })
})

test('divide y by x', () => {
    let data: number[][] = getData()
    data.forEach((item) => {
        expect(division(item[0], item[1])).toBe(item[0] / item[1])
    })
})
