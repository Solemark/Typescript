import { Typography, Card, Box } from '@mui/material'

interface Idata {
    artifact: IArtifact
}

interface IArtifact {
    name: string
    max_rarity: number
    "2-piece_bonus": string
    "4-piece_bonus": string
}

export const Artifact = ({ artifact }: Idata) => {
    return (
        <Box role='form'>
            <Card>
                <Typography variant='body2'>
                    {artifact.name} <br />
                    Max Rarity: {artifact.max_rarity} <br />
                    2p Bonus: {artifact['2-piece_bonus']} <br />
                    4p Bonus: {artifact['4-piece_bonus']} <br />
                </Typography>
            </Card>
        </Box>
    )
}
