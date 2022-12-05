import { useState, useEffect } from 'react'
import { Character } from '../components/Character'
import { Box, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material'
import { SortCharacters } from '../components/SortCharacters'

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

export const Characters = () => {
    const [characters, setCharacters] = useState<Icharacter[]>([])
    const [display, setDisplay] = useState<Icharacter[]>([])

    const [weapon, setWeapon] = useState<string>('All')
    const [element, setElement] = useState<string>('All')
    const [rarity, setRarity] = useState<string>('All')
    const [name, setName] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            await fetch('https://api.genshin.dev/characters/all')
                .then(async (res) => {
                    let data: Icharacter[] = await res.json()
                    setCharacters(data)
                    setDisplay(SortCharacters(data, 'All', 'All', 'All', '',))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getData()
    }, [])

    const sortWeapon = (e: any) => {
        setWeapon(e.target.value)
        setDisplay(SortCharacters(characters, e.target.value, element, rarity, name))
    }
    const sortElement = (e: any) => {
        setElement(e.target.value)
        setDisplay(SortCharacters(characters, weapon, e.target.value, rarity, name))
    }
    const sortRarity = (e: any) => {
        setRarity(e.target.value)
        setDisplay(SortCharacters(characters, weapon, element, e.target.value, name))
    }
    const sortName = (e: any) => {
        setName(e.target.value)
        setDisplay(SortCharacters(characters, 'All', 'All', 'All', e.target.value))
    }

    return (
        <>
            <Box role='form' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBlock: '5px' }}>
                <FormControl>
                    <InputLabel id='sort-weapon'>Weapon</InputLabel>
                    <Select labelId='sort-weapon' value={weapon} onChange={sortWeapon} autoWidth>
                        <MenuItem value='All'>All</MenuItem>
                        <MenuItem value='Sword'>Sword</MenuItem>
                        <MenuItem value='Claymore'>Claymore</MenuItem>
                        <MenuItem value='Bow'>Bow</MenuItem>
                        <MenuItem value='Polearm'>Polearm</MenuItem>
                        <MenuItem value='Catalyst'>Catalyst</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id='sort-element'>Element</InputLabel>
                    <Select labelId='sort-element' value={element} onChange={sortElement} autoWidth>
                        <MenuItem value='All'>All</MenuItem>
                        <MenuItem value='Anemo'>Anemo</MenuItem>
                        <MenuItem value='Cryo'>Cryo</MenuItem>
                        <MenuItem value='Dendro'>Dendro</MenuItem>
                        <MenuItem value='Electro'>Electro</MenuItem>
                        <MenuItem value='Geo'>Geo</MenuItem>
                        <MenuItem value='Hydro'>Hydro</MenuItem>
                        <MenuItem value='Pyro'>Pyro</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id='sort-rarity'>Rarity</InputLabel>
                    <Select labelId='sort-rarity' value={rarity} onChange={sortRarity} autoWidth>
                        <MenuItem value='All'>All</MenuItem>
                        <MenuItem value='4'>4*</MenuItem>
                        <MenuItem value='5'>5*</MenuItem>
                    </Select>
                </FormControl>
                <TextField value={name} label='Name' variant='standard' onChange={sortName} />
            </Box>
            <Box role='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {display.map((character: Icharacter, index: number) => (
                    <Box key={index} sx={{ maxWidth: '30%', paddingBlock: '5px', paddingInline: '5px' }}>
                        <Character character={character} />
                    </Box>
                ))}
            </Box>
        </>
    )
}
