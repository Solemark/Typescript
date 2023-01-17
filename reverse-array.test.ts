import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { reverseArray, reverseSingleArray } from './reverse-array.ts'

Deno.test(function return_10_to_1() {
    assertEquals(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})

Deno.test(function return_9_to_1() {
    assertEquals(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]), [9, 8, 7, 6, 5, 4, 3, 2, 1])
})

Deno.test(function return_10_to_1_single_array() {
    assertEquals(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})

Deno.test(function return_9_to_1_single_array() {
    assertEquals(reverseSingleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]), [9, 8, 7, 6, 5, 4, 3, 2, 1])
})
