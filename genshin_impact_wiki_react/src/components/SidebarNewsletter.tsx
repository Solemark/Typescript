import { Typography, Button, Box, TextField } from '@mui/material'

export const SidebarNewsletter = () => {
    return (
        <Box role='form' sx={{ paddingTop: '5px' }}>
            <Typography variant='h5'>Newsletter</Typography>
            <Typography variant='body2'>You can get updates for Genshin Impact here</Typography>
            <TextField label='Email Address' variant='standard' sx={{ width: '100%' }} />
            <Button variant='outlined' sx={{ width: '100%' }}>
                Subscribe
            </Button>
        </Box>
    )
}
