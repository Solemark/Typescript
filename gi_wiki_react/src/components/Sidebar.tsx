import { Paper } from '@mui/material'
import { SidebarTwitter } from './SidebarTwitter'
import { SidebarNewsletter } from './SidebarNewsletter'
import { SidebarPopularPages } from './SidebarPopularPages'
import { SidebarPopularCharacters } from './SidebarPopularCharacters'

export const Sidebar = () => {
    return (
        <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <SidebarTwitter />
            <SidebarNewsletter />
            <SidebarPopularPages />
            <SidebarPopularCharacters />
        </Paper>
    )
}
