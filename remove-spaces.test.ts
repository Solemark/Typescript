import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { removeSpaces } from './remove-spaces.ts'

const str = 'Hello  world!    How     are      you      today?'

Deno.test(function remove_spaces(){
    assertEquals(removeSpaces(str), 'Helloworld!Howareyoutoday?')
})