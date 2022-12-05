import React, { useState } from 'react'
import { Typography, Paper, Button, Container } from '@mui/material'

export const StoreItem = ({ item }: any): JSX.Element => {
    const [message, setMessage] = useState('')

    const addItem = async () => {
        const date = new Date()
        const res = await fetch('https://fakestoreapi.com/carts/5', {
            method: 'PUT',
            body: JSON.stringify({
                userId: 3,
                date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
                products: [{ productId: item.id, quantity: 0 }]
            })
        })
        let data = await res.json()
        if ((data.id = 5)) {
            setMessage('item added to cart')
        } else {
            setMessage('failed to add to cart')
        }
    }

    return (
        <Paper elevation={10} sx={{ maxWidth: '350px', marginInline: '5px', marginBlock: '5px' }}>
            <Typography variant='h5'>{item.title}</Typography>
            <img src={item.image} alt={item.description} width='350' height='350' style={{ paddingBlock: '5px' }} />
            <Typography variant='body2' color='text.primary'>
                {item.description}
            </Typography>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant='body1'>${item.price}</Typography>
                <Button href={`/store/${item.id}`}>View Item</Button>
                <Button onClick={addItem}>Add to Cart</Button>
            </Container>
            <Typography variant='body1' sx={{ textAlign: 'center' }}>
                {message}
            </Typography>
        </Paper>
    )
}
