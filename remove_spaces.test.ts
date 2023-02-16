import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { removeSpaces } from './remove_spaces.ts'

const str = 'Hello  world!    How     are      you      today?'

Deno.test(function remove_spaces() {
    assertEquals(removeSpaces(str), 'Helloworld!Howareyoutoday?')
})
