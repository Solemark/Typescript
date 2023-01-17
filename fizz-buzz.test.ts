import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { fizzBuzz } from './fizz-buzz.ts'

const max = 20
const fizz = 3
const buzz = 5

Deno.test(function play_fizz_buzz() {
    assertEquals(fizzBuzz(max, fizz, buzz), '1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\n')
})
