export const checkTime = (): string => {
    const date: Date = new Date()
    let output = ''

    output += 'day: ' + checkDay(date.getDay())
    output += '\ndate: ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    output += '\ntime: '

    if (date.getHours() > 12) {
        output += date.getHours() - 12
    } else {
        output += date.getHours()
    }
    output += ':' + date.getMinutes()
    return output
}

const checkDay = (day: number): string | undefined => {
    switch (day) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}
