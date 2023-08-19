import { removeSpaces } from './remove_spaces'

test('remove select characters from string', () => {
    const str = 'Hello  world!    How     are      you      today?'
    expect(removeSpaces(str)).toEqual('Helloworld!Howareyoutoday?')
})
