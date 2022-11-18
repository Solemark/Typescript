export const removeCharacters = (s: string, letters: string[]): string => {
    for (let i = 0; i < letters.length; i++) {
        const regex = new RegExp(letters[i], 'gi')
        s = s.replace(regex, '')
    }
    return s
}
