import { Typography, Box, Container } from '@mui/material'

interface Iconstellations {
    constellations: Iconstellation[]
}

interface Iconstellation {
    name: string
    unlock: string
    description: string
}

export const CharacterDetailsConstellations = ({ constellations }: Iconstellations) => {
    return (
        <>
            <Container>
                {constellations.map((constellation: Iconstellation, index: number) => (
                    <Box key={index} sx={{ paddingBlock: '5px' }}>
                        <Typography variant='h6'>{constellation.name}</Typography>
                        <Typography variant='body1'>{constellation.unlock}</Typography>
                        <Typography variant='body2'>{constellation.description}</Typography>
                    </Box>
                ))}
            </Container>
        </>
    )
}
