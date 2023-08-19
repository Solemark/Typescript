export const printEvens = (max: number): string => {
    let output = ''
    for (let i = 0; i <= max; i++) {
        if (i % 2 == 0) {
            output += `${i}\n`
        }
    }
    return output
}
