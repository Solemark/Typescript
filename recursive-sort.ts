var x: number = 0
var y: number = 0
export const sortRecursive = (arr: number[], c: number) => {
    if (c >= arr.length) {
        return arr
    } else {
        x = arr[c]
        y = arr[c + 1]
        if (x > y) {
            arr[c] = y
            arr[c + 1] = x
            return sortRecursive(arr, c - 1)
        }
        return sortRecursive(arr, c + 1)
    }
}
