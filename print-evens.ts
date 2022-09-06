export const printEvens = (max: number) => {
    var output: string = ''
    for (var i = 0; i <= max; i++) {
        if (i % 2 == 0) {
            output += i + '\n'
        }
    }
    return output
}
