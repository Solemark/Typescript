import { CardActionArea, Typography, Card, Box } from '@mui/material'
import { CureName } from './CureName'

interface Idata {
    character: Icharacter
}

interface Icharacter {
    name: string
    title: string
    vision: string
    weapon: string
    nation: string
    affiliation: string
    rarity: number
    constellation: string
    birthday: string
    description: string
}

export const Character = ({ character }: Idata) => {
    return (
        <Box role='form'>
            <Card>
                <CardActionArea href={`/characters/${CureName(character.name, character.vision, true)}`}>
                    <img src={`https://api.genshin.dev/characters/${CureName(character.name, character.vision, true)}/card`} width='100px' height='150px' alt='' />
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>
                        {CureName(character.name, character.vision, false)}
                    </Typography>
                </CardActionArea>
            </Card>
        </Box>
    )
}
