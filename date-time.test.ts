import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { checkTime } from './date-time.ts'

Deno.test(function check_current_date() {
    assertEquals(checkTime(), 'day: Thursday\ndate: 16/2/2023\ntime: 4:31')
})
