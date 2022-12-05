import { useState, useEffect } from 'react'
import { Typography, Paper, Button, Container } from '@mui/material'
import { useParams } from 'react-router-dom'

type Iproduct = {
    id: number
    title: string
    description: string
    price: number
    image: string
}

export const ItemDetail = () => {
    const { id } = useParams()
    const [item, setItem] = useState({ id: 0, title: '', description: '', price: 0, image: '' })
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getData = async (id: string | undefined) => {
            await fetch(`https://fakestoreapi.com/products/${id}`)
                .then(async (res) => {
                    let data: Iproduct = await res.json()
                    setItem(data)
                })
                .catch((e) => {
                    console.log('ERROR:', e)
                })
        }
        getData(id)
    }, [id])

    const addItem = async () => {
        const date = new Date()
        const res = await fetch('https://fakestoreapi.com/carts/5', {
            method: 'PUT',
            body: JSON.stringify({
                userId: 3,
                date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
                products: [{ productId: item.id, quantity: 1 }]
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
        <Paper elevation={10}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant='h5'>{item.title}</Typography>
                <img src={item.image} alt={item.description} width='350' height='350' style={{ paddingBlock: '5px' }} />
                <Typography variant='body2' color='text.primary'>
                    {item.description}
                </Typography>
                <Typography>${item.price}</Typography>
                <Button onClick={addItem}>Add to Cart</Button>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    {message}
                </Typography>
            </Container>
        </Paper>
    )
}
