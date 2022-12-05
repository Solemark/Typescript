import { Typography, Button, Box } from '@mui/material'

export const SidebarPopularPages = () => {
    return (
        <Box role='presentation' sx={{ paddingTop: '5px' }}>
            <Typography variant='h5'>Popular Pages</Typography>
            <Box role='presentation' sx={{ display: 'flex', flexDirection: 'column' }}>
                <Button variant='text' href='/characters' color='inherit'>
                    Characters
                </Button>
                <Button variant='text' href='/weapons' color='inherit'>
                    Weapons
                </Button>
                <Button variant='text' href='/artifacts' color='inherit'>
                    Artifacts
                </Button>
            </Box>
        </Box>
    )
}
