import { useState } from 'react'
import { Paper, Box, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material'

export const QuoteDetails = () => {
    const [QB, setQB] = useState<string>('')
    const [Relocation, setRelocation] = useState<string>('')
    const [Bedrooms, setBedrooms] = useState<string>('')
    const [Time, setTime] = useState<string>('')
    const [Vehicle, setVehicle] = useState<string>('')
    const [Items, setItems] = useState<string>('')

    return (
        <Paper elevation={10} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box width={'50%'} display={'flex'} flexDirection={'column'} sx={{ paddingBlock: '10px', paddingInline: '10px' }}>
                <FormControl>
                    <InputLabel id='quote/booking'>Quote / Booking</InputLabel>
                    <Select labelId='quote/booking' value={QB} onChange={(e) => setQB(e.target.value)} autoWidth>
                        <MenuItem value='Quote'>Quote</MenuItem>
                        <MenuItem value='Booking'>Booking</MenuItem>
                    </Select>
                </FormControl>
                <TextField label='Email' variant='standard' />
                <TextField label='Pickup Address' variant='standard' />
                <TextField label='Preferred Date' variant='standard' />
                <FormControl>
                    <InputLabel id='relocation-type'>Type of Relocation</InputLabel>
                    <Select labelId='relocation-type' value={Relocation} onChange={(e) => setRelocation(e.target.value)} autoWidth>
                        <MenuItem value='Home'>Home</MenuItem>
                        <MenuItem value='Office'>Office</MenuItem>
                        <MenuItem value='Commercial'>Commercial</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField label='No. of Rooms' variant='standard' />
                <FormControl>
                    <InputLabel id='bedroom-number'>Number of Bedrooms</InputLabel>
                    <Select labelId='bedroom-number' value={Bedrooms} onChange={(e) => setBedrooms(e.target.value)} autoWidth>
                        <MenuItem value='1'>1 Bedroom</MenuItem>
                        <MenuItem value='2'>2 Bedrooms</MenuItem>
                        <MenuItem value='3'>3 Bedrooms</MenuItem>
                        <MenuItem value='4'>4 Bedrooms</MenuItem>
                        <MenuItem value='5'>4+ Bedrooms</MenuItem>
                    </Select>
                </FormControl>
                <TextField label='Items to be Moved' variant='standard' />
            </Box>
            <Box width={'50%'} display={'flex'} flexDirection={'column'} sx={{ paddingBlock: '10px', paddingInline: '10px' }}>
                <TextField label='Name' variant='standard' />
                <TextField label='Contact Number' variant='standard' />
                <TextField label='Delivery Address' variant='standard' />
                <FormControl>
                    <InputLabel id='preferred-time'>Preferred Time</InputLabel>
                    <Select labelId='preferred-time' value={Time} onChange={(e) => setTime(e.target.value)} autoWidth>
                        <MenuItem value='7-8'>7am - 8am Arrival</MenuItem>
                        <MenuItem value='8-9'>8am - 9am Arrival</MenuItem>
                        <MenuItem value='11-14'>11am - 2pm Arrival</MenuItem>
                        <MenuItem value='12-15'>12pm - 3pm Arrival</MenuItem>
                        <MenuItem value='14-17'>2pm - 5pm Arrival</MenuItem>
                        <MenuItem value='15-18'>3pm - 6pm Arrival</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id='vehicle-required'>Size of Vehicle Required</InputLabel>
                    <Select labelId='vehicle-required' value={Vehicle} onChange={(e) => setVehicle(e.target.value)} autoWidth>
                        <MenuItem value='1-2'>1 man 2 ton van</MenuItem>
                        <MenuItem value='2-2'>2 men 2 ton van</MenuItem>
                        <MenuItem value='1-4'>1 man 4 ton truck</MenuItem>
                        <MenuItem value='2-4'>2 men 4 ton truck</MenuItem>
                        <MenuItem value='2-6'>2 men 6 ton truck</MenuItem>
                        <MenuItem value='1-8'>1 man 8 ton truck</MenuItem>
                        <MenuItem value='2-12'>2 men 12 ton truck</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id='special-items'>Are you Moving Special Items?</InputLabel>
                    <Select labelId='special-items' value={Items} onChange={(e) => setItems(e.target.value)} autoWidth>
                        <MenuItem value='None'>None</MenuItem>
                        <MenuItem value='Antique'>Antique Furniture</MenuItem>
                        <MenuItem value='Billiard'>Billiard Table</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField label='Other Details' variant='standard' />
            </Box>
        </Paper>
    )
}
