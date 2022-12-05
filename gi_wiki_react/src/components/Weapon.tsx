import { Typography, Card, Box } from '@mui/material'

interface Idata {
    weapon: IWeapon
}

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

export const Weapon = ({ weapon }: Idata) => {
    return (
        <Box role='form'>
            <Card>
                <Typography variant='body2'>
                    {weapon.name} <br />
                    {weapon.type} <br />
                    Rarity: {weapon.rarity} <br />
                    Base Attack: {weapon.baseAttack} <br />
                    Sub Attack: {weapon.subStat} <br />
                    Acquired: {weapon.location} <br />
                    Ascension: {weapon.ascensionMaterial} <br />
                    Passive: {weapon.passiveName} <br />
                    {weapon.passiveDesc} <br />
                </Typography>
            </Card>
        </Box>
    )
}
