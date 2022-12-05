import { useState, useEffect } from 'react'
import { Artifact } from '../components/Artifact'
import { Box, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material'
import { SortArtifacts } from '../components/SortArtifacts'

interface IArtifact {
    name: string
    max_rarity: number
    "2-piece_bonus": string
    "4-piece_bonus": string
}

export const Artifacts = () => {
    const [artifacts, setArtifacts] = useState<IArtifact[]>([])
    const [display, setDisplay] = useState<IArtifact[]>([])

    const [rarity, setRarity] = useState<string>('All')
    const [name, setName] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            await fetch('https://api.genshin.dev/artifacts/all')
                .then(async (res) => {
                    let data: IArtifact[] = await res.json()
                    setArtifacts(data)
                    setDisplay(SortArtifacts(data, 'All', ''))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getData()
    }, [])

    const sortRarity = (e: any) => {
        setRarity(e.target.value)
        setDisplay(SortArtifacts(artifacts, e.target.value, name))
    }
    const sortName = (e: any) => {
        setName(e.target.value)
        setDisplay(SortArtifacts(artifacts, rarity, e.target.value))
    }

    return (
        <>
            <Box role='form' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBlock: '5px' }}>
                <FormControl>
                    <InputLabel id='sort-rarity'>Rarity</InputLabel>
                    <Select labelId='sort-rarity' value={rarity} onChange={sortRarity} autoWidth>
                        <MenuItem value='All'>All</MenuItem>
                        <MenuItem value='3'>3*</MenuItem>
                        <MenuItem value='4'>4*</MenuItem>
                        <MenuItem value='5'>5*</MenuItem>
                    </Select>
                </FormControl>
                <TextField value={name} label='Name' variant='standard' onChange={sortName} />
            </Box>
            <Box role='form' sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                {display.map((artifact: IArtifact, index: number) => (
                    <Box key={index} sx={{ paddingBlock: '5px', paddingInline: '5px' }}>
                        <Artifact artifact={artifact} />
                    </Box>
                ))}
            </Box>
        </>
    )
}
