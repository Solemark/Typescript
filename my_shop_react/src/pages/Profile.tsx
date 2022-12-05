import { Container, Button, Typography, Paper } from '@mui/material'
import { useAuth } from '../context/AuthContext'

interface Iuser {
    user: any
}

export const Profile = (): JSX.Element => {
    const { currentUser }: any = useAuth()

    let user: Iuser = {
        user: currentUser
    }

    return (
        <Paper elevation={10} sx={{ paddingBlock: '5px' }}>
            <Container>
                <Typography variant='h5'>User</Typography>
                <Typography variant='body2' color='text.secondary'>
                    Name: {user.user.displayName}
                    <br />
                    Email: {user.user.email}
                </Typography>
                <Button href='update' color='inherit'>
                    Update Profile
                </Button>
                <Button href='logout' color='inherit'>
                    Logout
                </Button>
            </Container>
        </Paper>
    )
}
