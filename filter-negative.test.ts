import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { filterNegative } from './filter-negative.ts'

const a1: number[] = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10]

Deno.test(function remove_negative_numbers() {
    assertEquals(filterNegative(a1), [2, 3, 4, 6, 7, 9, 10])
})
