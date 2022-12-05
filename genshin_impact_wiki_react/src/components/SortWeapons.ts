interface IWeapon {
    name: string
    type: string
    rarity: number
    baseAttack: number
    subStat: string
    passiveName: string
    passiveDesc: string
    location: string
    ascensionMaterial: string
}

export const SortWeapons = (weapons: IWeapon[], weapon_type: string, rarity: string, name: string): IWeapon[] => {
    var sortedWeapons: IWeapon[] = []
    weapons.map((weapon: IWeapon) => {
        if (name === '') {
            if (weapon.type === weapon_type || weapon_type === 'All') {
                if (weapon.rarity === Number(rarity) || rarity === 'All') {
                    sortedWeapons.push(weapon)
                }
            }
        } else if (weapon.name.toLowerCase() === name.toLowerCase()) {
            sortedWeapons.push(weapon)
        }
        return weapon
    })
    return sortedWeapons
}
