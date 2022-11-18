import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { checkPalindrome } from './check-palindrome.ts'

Deno.test(function DAD_is_palindrome(){
    assertEquals(checkPalindrome('DAD'), true)
})
Deno.test(function Dad_is_palindrome(){
    assertEquals(checkPalindrome('Dad'), true)
})
Deno.test(function ABCDCBA_is_palindrome(){
    assertEquals(checkPalindrome('ABCDCBA'), true)
})
Deno.test(function ABCDcba_is_palindrome(){
    assertEquals(checkPalindrome('ABCDcba'), true)
})