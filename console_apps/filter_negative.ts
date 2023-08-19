export const filterNegative = (a1: number[]) => {
    const a2: number[] = []
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] >= 0) {
            a2.push(a1[i])
        }
    }
    return a2
}
