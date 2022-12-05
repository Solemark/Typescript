import { Box, TextField, Button } from '@mui/material'

export const QuickQuote = () => {
    return (
        <Box role='form'>
            <TextField label='Name' variant='standard' />
            <TextField label='Phone Number' variant='standard' />
            <TextField label='Email' variant='standard' />
            <TextField label='From' variant='standard' />
            <TextField label='To' variant='standard' />
            <TextField label='date (dd/mm/yy)' variant='standard' />
            <Button variant='text'>Submit</Button>
            <Button variant='text'>Make a Booking</Button>
        </Box>
    )
}
