export const checkTime = (): string => {
    const date: Date = new Date()
    let output = ''

    output += `day: ${checkDay(date.getDay())}\n`
    output += `date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\n`
    output += `time: ${getCurrentTime(date)}`
    return output
}

const getCurrentTime = (date: Date): string | undefined => {
    let output = ''
    if (date.getHours() > 12) {
        output += date.getHours() - 12
    } else {
        output += date.getHours()
    }
    output += ':' + date.getMinutes()
    return output
}

const checkDay = (day: number): string | undefined => {
    let output = ''
    switch (day) {
        case 0:
            output = 'Sunday'
        case 1:
            output = 'Monday'
        case 2:
            output = 'Tuesday'
        case 3:
            output = 'Wednesday'
        case 4:
            output = 'Thursday'
        case 5:
            output = 'Friday'
        case 6:
            output = 'Saturday'
    }
    return output
}
