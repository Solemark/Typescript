import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { sumArray } from './sum_array.ts'

const a1: number[] = [1, 2, 3, 4, 5]
const a2: number[] = [-5, -12, 23, 62, -100, 71]

Deno.test(function test_a1_is_15() {
    assertEquals(sumArray(a1), 15)
})

Deno.test(function test_a2_is_39() {
    assertEquals(sumArray(a2), 39)
})
