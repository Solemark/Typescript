export const outputTable = (a: number, max: number): string[] => {
    let b = 0
    const arr: string[] = []
    while (b <= max) {
        arr.push(a + ' x ' + b + ' = ' + a * b)
        b++
    }
    return arr
}
