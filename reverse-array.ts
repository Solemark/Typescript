export const reverseArray = (a1: number[]) => {
    var a2: number[] = []
    var c: number = a1.length - 1
    for (let i: number = 0; i < a1.length; i++) {
        a2.push(a1[c])
        c--
    }
    return a2
}

export const reverseSingleArray = (a1: number[]) => {
    var c: number = a1.length - 1
    var x: number = 0
    var y: number = 0
    for (var i: number = 0; i <= c; i++) {
        x = a1[i]
        y = a1[c]
        a1[c] = x
        a1[i] = y
        c--
    }
    return a1
}
