export const cure_date = (birthday: string): string => {
    let output = ''
    const [year, month, day] = birthday.split('-')
    output += day + ' '
    switch (month) {
        case '01':
            output += 'January'
            break
        case '02':
            output += 'February'
            break
        case '03':
            output += 'March'
            break
        case '04':
            output += 'April'
            break
        case '05':
            output += 'May'
            break
        case '06':
            output += 'June'
            break
        case '07':
            output += 'July'
            break
        case '08':
            output += 'August'
            break
        case '09':
            output += 'September'
            break
        case '10':
            output += 'October'
            break
        case '11':
            output += 'November'
            break
        case '12':
            output += 'December'
            break
        default:
            output += 'Invalid Month!'
            break
    }
    return output
}
