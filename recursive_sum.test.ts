import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { sum, sumArray } from './recursive_sum.ts'

Deno.test(function sum_between_7_and_0() {
    assertEquals(sum(1, 0), 1)
})
Deno.test(function sum_first_7_values_of_array() {
    assertEquals(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 0), 36)
})
