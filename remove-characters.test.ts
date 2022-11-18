import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { removeCharacters } from './remove-characters.ts'

const s = 'Hello! My name is Mason'
const letters: string[] = ['m', '!', ' ']

Deno.test(function remove_characters_from_string(){
    assertEquals(removeCharacters(s, letters), 'Helloynaeisason')

})
