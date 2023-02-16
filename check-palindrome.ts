export const checkPalindrome = (str: string): boolean => {
    let x = 0
    let y = str.length - 1
    if(typeof str === 'string'){
        while(x < y){
            if(str[x] != str[y]){
                return false
            }
            x++
            y--
        }
        return true
    }else{
        return false
    }
}