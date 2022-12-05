import { Typography, Button, Box } from '@mui/material'

export const SidebarPopularCharacters = () => {
    return (
        <Box role='presentation' sx={{ paddingTop: '5px' }}>
            <Typography variant='h5'>Popular Pages</Typography>
            <Box role='presentation' sx={{ display: 'flex', flexDirection: 'column' }}>
                <Button variant='text' href='/characters/raiden' color='inherit'>
                    Raiden Shogun
                </Button>
                <Button variant='text' href='/characters/ayaka' color='inherit'>
                    Kamisato Ayaka
                </Button>
            </Box>
            <Button variant='outlined' href='/characters' sx={{ width: '100%' }}>
                View More
            </Button>
        </Box>
    )
}
