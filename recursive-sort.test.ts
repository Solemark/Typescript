import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { sortRecursive } from './recursive-sort.ts'

Deno.test(function sort_array_recursively(){
    assertEquals(sortRecursive([5, 2, 9, 7, 14, 8], 0), [2, 5, 7, 8, 9, 14])
})
