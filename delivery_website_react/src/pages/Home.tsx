import { Box } from '@mui/material'
import { QuickQuote } from '../components/QuickQuote'

export const Home = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '80%' }}>
                    <p>Welcome to the Homepage!</p>
                </Box>
                <Box sx={{ width: '20%' }}>
                    <QuickQuote />
                </Box>
            </Box>
        </>
    )
}
