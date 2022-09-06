import { describe, expect, test } from '@jest/globals'
import { convertDistance } from './km-to-miles'

const km: number = 10
const m: number = 10
const ktm: number = 0.6213712
const mtk: number = 1.609344

describe('Convert distance', () => {
    test('km to miles', () => {
        expect(convertDistance(km, ktm)).toBe(6.213712)
    })
    test('miles to km', () => {
        expect(convertDistance(m, mtk)).toBe(16.09344)
    })
})
