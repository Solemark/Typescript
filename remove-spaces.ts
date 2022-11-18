export const removeSpaces = (str: string): string => {
    str = str.split(' ').join('')
    return str
}
