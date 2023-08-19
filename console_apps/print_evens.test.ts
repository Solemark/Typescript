import { printEvens } from './print_evens'

test('print even numbers from 0 to max', () => {
    const max = 10
    expect(printEvens(max)).toEqual('0\n2\n4\n6\n8\n10\n')
})
