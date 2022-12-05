import { useAuth } from '../context/AuthContext'
import { Tabs, Tab, AppBar } from '@mui/material'
import { MUIDrawer } from './MUIDrawer'

export const NavbarList = (): JSX.Element => {
    const { currentUser }: any = useAuth()

    return (
        <AppBar position='static'>
            <Tabs value={false} variant='scrollable' scrollButtons={false} visibleScrollbar={true}>
                <MUIDrawer />
                <Tab label='Home' href='/' color='inherit' />
                <Tab label='Store' href='/store' color='inherit' />
                <Tab label='About Us' href='/aboutus' color='inherit' />
                {currentUser ? <NavbarHasUser /> : <NavbarNoUser />}
            </Tabs>
        </AppBar>
    )
}
const NavbarHasUser = () => {
    return (
        <>
            <Tab label='Cart' href='/store/cart' color='inherit' />
            <Tab label='Profile' href='/users/profile' color='inherit' />
            <Tab label='Logout' href='/users/logout' color='inherit' />
        </>
    )
}

const NavbarNoUser = () => {
    return (
        <>
            <Tab label='Register' href='/users/register' color='inherit' />
            <Tab label='Login' href='/users/login' color='inherit' />
        </>
    )
}
