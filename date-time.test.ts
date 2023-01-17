import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { checkTime } from './date-time.ts'

Deno.test(function check_current_date() {
    assertEquals(checkTime(), 'day: Tuesday\ndate: 17/1/2023\ntime: 5:28')
})
