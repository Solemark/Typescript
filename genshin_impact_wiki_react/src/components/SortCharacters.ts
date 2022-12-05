interface Icharacter {
    name: string
    title: string
    vision: string
    weapon: string
    nation: string
    affiliation: string
    rarity: number
    constellation: string
    birthday: string
    description: string
}

export const SortCharacters = (characters: Icharacter[], weapon: string, element: string, rarity: string, name: string): Icharacter[] => {
    var sortedCharacters: Icharacter[] = []
    characters.map((character: Icharacter) => {
        if (name === '') {
            if (character.weapon === weapon || weapon === 'All') {
                if(character.vision === element || element === 'All')
                    if (character.rarity === Number(rarity) || rarity === 'All') {
                        sortedCharacters.push(character)
                    }
            }
        } else if (character.name.toLowerCase() === name.toLowerCase()) {
            sortedCharacters.push(character)
        }
        return character
    })
    return sortedCharacters
}
