import { removeCharacters } from './remove_characters'

test('remove select characters from string', () => {
    const s = 'Hello! My name is Mason'
    const letters: string[] = ['m', '!', ' ']
    expect(removeCharacters(s, letters)).toEqual('Helloynaeisason')
})
