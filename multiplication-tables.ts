export const outputTable = (a: number, max: number) => {
    var b: number = 0
    var arr: string[] = []
    while (b <= max) {
        arr.push(a + ' x ' + b + ' = ' + a * b)
        b++
    }
    return arr
}
