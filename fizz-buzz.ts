export const fizzBuzz = (max: number, fizz: number, buzz: number) => {
    var output: string = ''
    var str: string = ''
    for (var i: number = 1; i <= max; i++) {
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
