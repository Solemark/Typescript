import { Tabs, Tab, AppBar } from '@mui/material'
import { NavbarServicesMenu } from './NavbarServicesMenu'

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Tabs value={false} variant='scrollable' scrollButtons={false} visibleScrollbar={true}>
                <Tab label='Delivery Website' href='/' />
                <NavbarServicesMenu />
                <Tab label='Storage' href='/storage' />
                <Tab label='Contact Us' href='/contactus' />
                <Tab label='Get a Quote' href='/quote' />
                <Tab label='Delivery Calculator' href='/calculator' />
            </Tabs>
        </AppBar>
    )
}
