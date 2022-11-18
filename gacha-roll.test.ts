import { assertStringIncludes } from "https://deno.land/std@0.165.0/testing/asserts.ts"
import { gachaRoll } from './gacha-roll.ts'

Deno.test(function FGO_gacha_roll(){
    assertStringIncludes(gachaRoll('FGO'), 'FGO')
})
Deno.test(function AK_gacha_roll(){
    assertStringIncludes(gachaRoll('AK'), 'AK')
})
Deno.test(function GI_gacha_roll(){
    assertStringIncludes(gachaRoll('GI'), 'GI')
})
