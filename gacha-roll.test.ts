import { describe, expect, test } from '@jest/globals'
import { gachaRoll } from './gacha-roll'

describe('Check the gacha roll', () => {
    test('do a gacha roll on Fate Grand Order', () => {
        expect(gachaRoll('FGO')).toContain('FGO')
    })
    test('do a gacha roll on Arknights', () => {
        expect(gachaRoll('AK')).toContain('AK')
    })
    test('do a gacha roll on Genshin Impact', () => {
        expect(gachaRoll('GI')).toContain('GI')
    })
})
