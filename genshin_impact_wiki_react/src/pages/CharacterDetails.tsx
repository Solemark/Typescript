import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Paper, Tab } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import { CharacterDetailsInfo } from '../components/CharacterDetailsInfo'
import { CharacterDetailsSkills } from '../components/CharacterDetailsSkills'
import { CharacterDetailsConstellations } from '../components/CharacterDetailsConstellations'
import { CharacterDetailsSkins } from '../components/CharacterDetailsSkins'

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
    skillTalents: Iskills[]
    passiveTalents: Iskills[]
    constellations: Iskills[]
    outfits?: Ioutfit[]
}
interface Iskills {
    name: string
    unlock: string
    description: string
}
interface Ioutfit {
    type: string
    name: string
    description: string
    rarity: number
    price: number
    image: string
}

export const CharacterDetails = () => {
    const { name } = useParams()
    const [value, setValue] = useState('0')
    const [data, setData] = useState<Icharacter>({ name: '', title: '', vision: '', weapon: '', nation: '', affiliation: '', rarity: 0, constellation: '', birthday: '', description: '', skillTalents: [], passiveTalents: [], constellations: [], outfits: [] })

    useEffect(() => {
        const getData = async () => {
            await fetch(`https://api.genshin.dev/characters/${name}`)
                .then(async (res) => {
                    let data: Icharacter = await res.json()
                    setData(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getData()
    }, [name])

    const handleChange = (e: React.SyntheticEvent, value: string) => {
        setValue(value)
    }
    return (
        <Paper elevation={10}>
            <TabContext value={value}>
                <TabList onChange={handleChange}>
                    <Tab label='Info' value='0' />
                    <Tab label='Skills' value='1' />
                    <Tab label='Constellations' value='2' />
                    {data.outfits && <Tab label='Skins' value='3' />}
                </TabList>
                <TabPanel value='0'>
                    <CharacterDetailsInfo character={data} />
                </TabPanel>
                <TabPanel value='1'>
                    <CharacterDetailsSkills skillTalents={data.skillTalents} passiveTalents={data.passiveTalents} />
                </TabPanel>
                <TabPanel value='2'>
                    <CharacterDetailsConstellations constellations={data.constellations} />
                </TabPanel>
                {data.outfits && (
                    <>
                        <TabPanel value='3'>
                            <CharacterDetailsSkins outfits={data.outfits} />
                        </TabPanel>
                    </>
                )}
            </TabContext>
        </Paper>
    )
}
