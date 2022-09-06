export const removeCharacters = (s: string, letters: string[]) => {
    for (var i = 0; i < letters.length; i++) {
        var regex = new RegExp(letters[i], 'gi')
        s = s.replace(regex, '')
    }
    return s
}
