import { gachaRoll } from './gacha_roll'

const getData = (): string[] => {
    return ['FGO', 'AK', 'GI']
}

test('Check the roll succeeded', () => {
    let data: string[] = getData()
    data.forEach(game => {
        expect(gachaRoll(game)).toContain(game)
    })
})
