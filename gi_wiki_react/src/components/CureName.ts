export const CureName = (name: string, vision: string, link: boolean): string => {
    if (name.startsWith('Kamisato ')) {
        name = name.substring(9)
    } else if (name.startsWith('Kaedehara ')) {
        name = name.substring(10)
    } else if (name.startsWith('Sangonomiya ')) {
        name = name.substring(12)
    } else if (name.endsWith(' Shogun')) {
        name = name.substring(0, 6)
    } else if (name.startsWith('Kujou ')) {
        name = name.substring(6)
    } else if (name.startsWith('Traveler')) {
        name += ' ' + vision
    }
    if (link) {
        name = name.toLowerCase()
        name = name.replace(' ', '-')
    }
    return name
}
