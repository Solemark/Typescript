import { Box } from '@mui/material'
import { QuoteDetails } from '../components/QuoteDetails'
import { QuoteAside } from '../components/QuoteAside'

export const Quote = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ width: '75%' }}>
                <QuoteDetails />
            </Box>
            <Box sx={{ width: '25%' }}>
                <QuoteAside />
            </Box>
        </Box>
    )
}
