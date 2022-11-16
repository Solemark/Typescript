import { describe, expect, test } from '@jest/globals'
import { checkTime } from './date-time'

describe('check date', () => {
    test('check current date', () => {
        expect(checkTime()).toBe('day: Monday\ndate: 14/10/2022\ntime: 4:32')
    })
})
