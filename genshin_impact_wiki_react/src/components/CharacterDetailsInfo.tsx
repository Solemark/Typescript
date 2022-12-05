import { Typography, Box, Container } from '@mui/material'
import { useParams } from 'react-router-dom'

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

export const CharacterDetailsInfo = ({ character }: Idata) => {
    const { name } = useParams()
    return (
        <>
            ToDo: change date format from yyyy-mm-dd to dd month
            <Box role='presentation' sx={{ display: 'flex' }}>
                <Box role='image'>
                    <img src={`https://api.genshin.dev/characters/${name}/card`} width='200px' height='300px' alt='' />
                </Box>
                <Box role='presentation'>
                    <Container>
                        <Typography variant='body1'>
                            Name: {character.name} <br />
                            Element: {character.vision} <br />
                            Weapon: {character.weapon} <br />
                            Rarity: {character.rarity} <br />
                            Affiliation: {character.affiliation} <br />
                            Nation: {character.nation} <br />
                            Birthday: {character.birthday} <br />
                            Constellation: {character.constellation} <br />
                            Description: {character.description}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
