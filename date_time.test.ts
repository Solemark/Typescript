import { checkTime } from './date_time'

test('get current datetime', () => {
    expect(checkTime()).toBe('day: Friday\ndate: 14/7/2023\ntime: 4:57')
})
