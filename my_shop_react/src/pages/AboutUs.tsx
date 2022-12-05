import { Typography, Container, Paper } from '@mui/material'
export const AboutUs = (): JSX.Element => {
    return (
        <Paper elevation={10}>
            <Container sx={{ textAlign: 'center', paddingBlock: '5px' }}>
                <Typography>
                    My shop has been trading since 1969!
                    <br />
                    We are the premier online store for random junk!
                </Typography>
                <br />
                <Typography variant='h5'>Contact us:</Typography>
                <Typography>
                    Email: test@mshop.com.au
                    <br />
                    Phone: (+61) 123 456 789
                </Typography>
            </Container>
        </Paper>
    )
}
