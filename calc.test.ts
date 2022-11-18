import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { multiply, division, addition, subtraction } from './calc.ts'

const x = 2
const y = 5

Deno.test(function multiply_2_and_5(){
    assertEquals(multiply(x, y), 10)
})
Deno.test(function multiply_2_and_negative_5(){
    assertEquals(multiply(x, -y), -10)
})
Deno.test(function multiply_negative_2_and_negative_5(){
    assertEquals(multiply(-x, -y), 10)
})

Deno.test(function divide_2_and_5(){
    assertEquals(division(x, y), 0.4)
})
Deno.test(function divide_2_and_negative_5(){
    assertEquals(division(x, -y), -0.4)
})
Deno.test(function divide_negative_2_and_negative_5(){
    assertEquals(division(-x, -y), 0.4)
})

Deno.test(function add_2_and_5(){
    assertEquals(addition(x, y), 7)
})
Deno.test(function add_2_and_negative_5(){
    assertEquals(addition(x, -y), -3)
})
Deno.test(function add_negative_2_and_negative_5(){
    assertEquals(addition(-x, -y), -7)
})

Deno.test(function subtract_2_and_5(){
    assertEquals(subtraction(x, y), -3)
})
Deno.test(function subtract_2_and_negative_5(){
    assertEquals(subtraction(x, -y), 7)
})
Deno.test(function subtract_negative_2_and_negative_5(){
    assertEquals(subtraction(-x, -y), 3)
})
