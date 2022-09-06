export const sum = (n: number, result: number) => {
    if (n <= 0) {
        return result
    } else {
        result += n
        return sum(n - 1, result)
    }
}

export const sumArray = (arr: number[], n: number, result: number) => {
    if (n < 0) {
        return result
    }
    result += arr[n]
    return sumArray(arr, n - 1, result)
}
