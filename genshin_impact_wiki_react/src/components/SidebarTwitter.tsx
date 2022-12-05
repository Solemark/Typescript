import { Typography, Button, Box } from '@mui/material'
export const SidebarTwitter = () => {
    return (
        <Box role='presentation' sx={{ paddingTop: '5px' }}>
            <Typography variant='h5'>Twitter Feed</Typography>
            <Typography variant='body2'>Twitter Content goes here</Typography>
            <Button variant='outlined' sx={{ width: '100%' }}>
                View On Twitter
            </Button>
        </Box>
    )
}
