import { useState, useEffect } from 'react'
import { Typography, Box, Button } from '@mui/material'

type Iproduct = {
    id: number
    title?: string
    price?: number
    image?: string
}

type Tproduct = {
    product: Iproduct
}

export const Product = ({ id }: Iproduct) => {
    const [product, setProduct] = useState<Iproduct>({ id: 0, title: '', price: 0, image: '' })
    const [view, setView] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getData = async (id: number) => {
            await fetch(`https://fakestoreapi.com/products/${id}`)
                .then(async (res) => {
                    let data: Iproduct = await res.json()
                    setProduct(data)
                })
                .catch((e) => {
                    console.log('ERROR:', e)
                })
        }
        getData(id)
    }, [id])

    const removeItem = async () => {
        setView(false)
        const date = new Date()
        await fetch('https://fakestoreapi.com/carts/5', {
            method: 'PUT',
            body: JSON.stringify({
                userId: 3,
                date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
                products: [{ productId: id, quantity: 0 }]
            })
        })
            .then(async (res) => {
                let data = await res.json()
                if ((data.id = 5)) {
                    setMessage(product.title + ': removed from cart')
                } else {
                    setMessage(product.title + ': failed to remove from cart')
                }
            })
            .catch((e) => {
                console.log('error:', e)
            })
    }

    return (
        <>
            {message}
            <br />
            {view && (
                <>
                    <CartItem product={product} />
                    <Button onClick={removeItem}>Remove Item</Button>
                </>
            )}
        </>
    )
}

const CartItem = ({ product }: Tproduct) => {
    return (
        <Box>
            <Typography variant='h6'>{product.title}</Typography>
            <img src={product.image} height='100px' width='100px' alt={product.title} />
            <br />
            <Typography variant='body1'>${product.price}</Typography>
            <br />
        </Box>
    )
}
