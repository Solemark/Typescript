import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { StoreItem } from '../components/StoreItem'

export const Store = (): JSX.Element => {
    const [data, setData] = useState([''])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            let data = await res.json()
            setData(data)
        }
        getData()
    }, [])

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {data.map((item: string, index: number) => (
                <Box key={index}>
                    <StoreItem item={item} />
                </Box>
            ))}
        </Box>
    )
}
