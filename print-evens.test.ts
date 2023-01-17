import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { printEvens } from './print-evens.ts'

const max = 10

Deno.test(function print_even_numbers() {
    assertEquals(printEvens(max), '0\n2\n4\n6\n8\n10\n')
})
