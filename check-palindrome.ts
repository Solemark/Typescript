export const checkPalindrome = (str: string): boolean => {
    if(typeof str === 'string'){
        if(str.toUpperCase() == reverseString(str.toUpperCase())){
            return true
        } else{
            return false
        }
    }else{
        return false
    }
}

const reverseString = (str: string): string => {
    var output: string = ""
    for(var i: number = str.length-1; i >= 0; i--){
        output += str[i]
    }
    return output
}