export const reverseArray = (a1: number[]) => {
    var a2: number[] = []
    var c: number = a1.length
    for (let i: number = 0; i < a1.length; i++) {
        c--
        a2.push(a1[c])
    }
    return a2
}
