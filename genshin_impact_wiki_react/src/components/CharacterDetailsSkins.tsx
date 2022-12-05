import { useParams } from 'react-router-dom'
import { Typography, Box, Container } from '@mui/material'

interface Ioutfits {
    outfits: Ioutfit[]
}
interface Ioutfit {
    type: string
    name: string
    description: string
    rarity: number
    price: number
    image: string
}

export const CharacterDetailsSkins = ({ outfits }: Ioutfits) => {
    const { name } = useParams()
    return (
        <>
            <Box role='presentation'>
                <Container>
                    {outfits.map((outfit: Ioutfit, index: number) => (
                        <Box key={index} role='presentation' sx={{ display: 'flex' }}>
                            <Box role='image'>
                                <img src={`https://api.genshin.dev/characters/${name}/${outfit.image}`} width='300px' height='300px' alt='' />
                            </Box>
                            <Box role='presentation'>
                                <Typography variant='body1'>
                                    {outfit.name} - {outfit.type}
                                    <br />
                                    Rarity: {outfit.rarity} <br />
                                    Price: {outfit.price} <br />
                                    Description: {outfit.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Container>
            </Box>
        </>
    )
}
