import { useState, useEffect } from 'react'
import { Container, Paper, Typography, Button } from '@mui/material'
import { Product } from './CartItem'

type Idata = {
    id: number
    userId: number
    date: string
    products: Iproducts[]
}
type Iproducts = {
    productId: number
    quantity: number
}

export const Cart = (): JSX.Element => {
    const [data, setData] = useState<Idata>({ id: 0, userId: 0, date: '', products: [{ productId: 0, quantity: 0 }] })

    useEffect(() => {
        const getData = async () => {
            await fetch('https://fakestoreapi.com/carts/5')
                .then(async (res) => {
                    let data: Idata = await res.json()
                    setData(data)
                })
                .catch((e) => {
                    console.log(e)
                })
        }
        getData()
    }, [])
    return (
        <Paper elevation={10} sx={{ paddingBlock: '5px' }}>
            <Container>
                <Typography variant='h5'>My Shopping Cart</Typography>
                <Typography variant='body2'>User ID: {data.userId}</Typography>
                <Typography variant='body2'>Cart Id: {data.id}</Typography>
                {data.products.map((item, index) => (
                    <div key={index}>
                        <Product id={item.productId} />
                    </div>
                ))}
                <br />
                <Button>Purchase</Button>
            </Container>
        </Paper>
    )
}
