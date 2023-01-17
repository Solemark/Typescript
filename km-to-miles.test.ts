import { assertEquals } from 'https://deno.land/std@0.173.0/testing/asserts.ts'
import { convertDistance } from './km-to-miles.ts'

const km = 10
const m = 10
const ktm = 0.6213712
const mtk = 1.609344

Deno.test(function km_to_miles() {
    assertEquals(convertDistance(km, ktm), 6.213712)
})
Deno.test(function miles_to_km() {
    assertEquals(convertDistance(m, mtk), 16.09344)
})
