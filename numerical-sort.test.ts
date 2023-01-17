import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { numericalSort } from './numerical-sort.ts'

const a1: number[] = [5, 2, 1, 3, 6, 4, 10, 9, 8, 7]

Deno.test(function numerically_sort_array() {
    assertEquals(numericalSort(a1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
