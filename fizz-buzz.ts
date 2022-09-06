export const fizzBuzz = (max: number, fizz: number, buzz: number) => {
    var output: string = ''
    var s: string = ''
    for (var i: number = 1; i <= max; i++) {
        s = ''
        if (i % fizz == 0) {
            s += 'fizz'
        }
        if (i % buzz == 0) {
            s += 'buzz'
        }
        if (s == '') {
            s += i
        }
        output += s + '\n'
    }
    return output
}
