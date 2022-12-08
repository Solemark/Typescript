export const cure_name = (name: string, vision: string): string => {
    name = name.toLowerCase()
    name = name.replace(" ", "-")
    switch(name){
        case "kamisato-ayaka":
            name = "ayaka"
            break
        case "kaedehara-kazuha":
            name = "kazuha"
            break
        case "sangonomiya-kokomi":
            name = "kokomi"
            break
        case "raiden-shogun":
            name = "raiden"
            break
        case "kujou-sara":
            name = "sara"
            break
        case "traveler":
            name = "traveler-" + vision.toLowerCase()
            break
        default:
            break
    }
    return name
}