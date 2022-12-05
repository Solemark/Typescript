import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tab, Menu, MenuItem } from '@mui/material'

export const NavbarServicesMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    return (
        <>
            <Tab label='Services' onMouseEnter={(e) => setAnchorEl(e.currentTarget)} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onMouseLeave={() => setAnchorEl(null)}
                onClick={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}>
                <MenuItem onClick={() => navigate('/1')}>1</MenuItem>
                <MenuItem onClick={() => navigate('/2')}>2</MenuItem>
                <MenuItem onClick={() => navigate('/3')}>3</MenuItem>
                <MenuItem onClick={() => navigate('/4')}>4</MenuItem>
                <MenuItem onClick={() => navigate('/5')}>5</MenuItem>
            </Menu>
        </>
    )
}
