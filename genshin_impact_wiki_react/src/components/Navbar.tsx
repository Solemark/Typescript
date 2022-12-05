import { Tabs, Tab, AppBar } from '@mui/material'

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Tabs value={false} variant='scrollable' scrollButtons={false} visibleScrollbar={true}>
                <Tab label='Home' href='/' />
                <Tab label='Characters' href='/characters' />
                <Tab label='Weapons' href='/weapons' />
                <Tab label='Artifacts' href='/artifacts' />
                <Tab />
            </Tabs>
        </AppBar>
    )
}
