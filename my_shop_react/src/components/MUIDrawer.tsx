import { useState } from 'react'
import { Drawer, Box, IconButton, Container, Button, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useAuth } from '../context/AuthContext'

export const MUIDrawer = (): JSX.Element => {
    const [drawerFlag, setDrawerFlag] = useState(false)
    const { currentUser }: any = useAuth()

    return (
        <>
            <IconButton onClick={() => setDrawerFlag(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={drawerFlag} onClose={() => setDrawerFlag(false)}>
                <Box role='presentation'>
                    <Container>
                        <Typography sx={{ textAlign: 'center', paddingTop: '20px', borderBottom: 1 }}>General</Typography>
                        <Button variant='text' href='/' sx={{ width: '100%' }} color='inherit'>
                            Home
                        </Button>
                        <Button variant='text' href='/aboutus' sx={{ width: '100%' }} color='inherit'>
                            About Us
                        </Button>
                        <Typography sx={{ textAlign: 'center', paddingTop: '20px', borderBottom: 1 }}>Products</Typography>
                        <Button variant='text' href='/store' sx={{ width: '100%' }} color='inherit'>
                            Store
                        </Button>
                        <Button variant='text' href='/store/cart' sx={{ width: '100%' }} color='inherit'>
                            Cart
                        </Button>
                        <Typography sx={{ textAlign: 'center', paddingTop: '20px', borderBottom: 1 }}>User</Typography>
                        {currentUser ? <UserLoggedIn /> : <UserLoggedOut />}
                    </Container>
                </Box>
            </Drawer>
        </>
    )
}

const UserLoggedIn = () => {
    return (
        <>
            <Button variant='text' href='/profile' sx={{ width: '100%' }} color='inherit'>
                Profile
            </Button>
            <Button variant='text' href='/logout' sx={{ width: '100%' }} color='inherit'>
                Logout
            </Button>
        </>
    )
}

const UserLoggedOut = () => {
    return (
        <>
            <Button variant='text' href='/users/register' sx={{ width: '100%' }} color='inherit'>
                Register
            </Button>
            <Button variant='text' href='/users/login' sx={{ width: '100%' }} color='inherit'>
                Login
            </Button>
            <Button variant='text' href='/users/forgot-password' sx={{ width: '100%' }} color='inherit'>
                Forgot Password
            </Button>
        </>
    )
}
