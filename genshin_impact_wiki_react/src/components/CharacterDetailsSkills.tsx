import { Typography, Box, Container } from '@mui/material'

interface Iskills {
    skillTalents: Iskill[]
    passiveTalents: Iskill[]
}

interface Iskill {
    name: string
    unlock: string
    description: string
}
export const CharacterDetailsSkills = ({ skillTalents, passiveTalents }: Iskills) => {
    return (
        <>
            <Container>
                ToDo: Add skill details
                <Typography variant='h5'>Skills</Typography>
                {skillTalents.map((skill: Iskill, index: number) => (
                    <Box key={index} sx={{ paddingBlock: '5px' }}>
                        <Typography variant='h6'>{skill.name}</Typography>
                        <Typography variant='body1'>{skill.unlock}</Typography>
                        <Typography variant='body2'>{skill.description}</Typography>
                    </Box>
                ))}
            </Container>
            <Container>
                <Typography variant='h5'>Passives</Typography>
                {passiveTalents.map((skill: Iskill, index: number) => (
                    <Box key={index} sx={{ paddingBlock: '5px' }}>
                        <Typography variant='h6'>{skill.name}</Typography>
                        <Typography variant='body1'>{skill.unlock}</Typography>
                        <Typography variant='body2'>{skill.description}</Typography>
                    </Box>
                ))}
            </Container>
        </>
    )
}
