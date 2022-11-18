import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { checkTime } from './date-time.ts'

Deno.test(function check_current_date(){
    assertEquals(checkTime(), 'day: Friday\ndate: 18/11/2022\ntime: 3:23')
})