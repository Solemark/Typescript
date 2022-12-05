import { useState, useEffect } from 'react'
import { Weapon } from '../components/Weapon'
import { Box, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material'
import { SortWeapons } from '../components/SortWeapons'

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

export const Weapons = () => {
    const [weapons, setWeapons] = useState<IWeapon[]>([])
    const [display, setDisplay] = useState<IWeapon[]>([])

    const [weapon, setWeapon] = useState<string>('All')
    const [rarity, setRarity] = useState<string>('All')
    const [name, setName] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            await fetch('https://api.genshin.dev/weapons/all')
                .then(async (res) => {
                    let data: IWeapon[] = await res.json()
                    setWeapons(data)
                    setDisplay(SortWeapons(data, 'All', 'All', ''))
                    //setDisplay(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getData()
    }, [])

    const sortWeapon = (e: any) => {
        setWeapon(e.target.value)
        setDisplay(SortWeapons(weapons, e.target.value, rarity, name))
    }
    const sortRarity = (e: any) => {
        setRarity(e.target.value)
        setDisplay(SortWeapons(weapons, weapon, e.target.value, name))
    }
    const sortName = (e: any) => {
        setName(e.target.value)
        setDisplay(SortWeapons(weapons, 'All', 'All', e.target.value))
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
                    <InputLabel id='sort-rarity'>Rarity</InputLabel>
                    <Select labelId='sort-rarity' value={rarity} onChange={sortRarity} autoWidth>
                        <MenuItem value='All'>All</MenuItem>
                        <MenuItem value='4'>4*</MenuItem>
                        <MenuItem value='5'>5*</MenuItem>
                    </Select>
                </FormControl>
                <TextField value={name} label='Name' variant='standard' onChange={sortName} />
            </Box>
            <Box role='form' sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                {display.map((weapon: IWeapon, index: number) => (
                    <Box key={index} sx={{ paddingBlock: '5px', paddingInline: '5px' }}>
                        <Weapon weapon={weapon} />
                    </Box>
                ))}
            </Box>
        </>
    )
}
