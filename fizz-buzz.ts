export const fizzBuzz = (max: number, fizz: number, buzz: number) => {
    let output = ''
    let str = ''
    for (let i = 1; i <= max; i++) {
        str = ''
        if (i % fizz == 0) {
            str += 'fizz'
        }
        if (i % buzz == 0) {
            str += 'buzz'
        }
        if (str == '') {
            str += i
        }
        output += str + '\n'
    }
    return output
}
