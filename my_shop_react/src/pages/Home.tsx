import { Typography } from '@mui/material'
import { useAuth } from '../context/AuthContext'

interface Iuser {
    user: any
}

export const Home = (): JSX.Element => {
    const { currentUser }: any = useAuth()

    let user: Iuser = {
        user: currentUser
    }

    return currentUser ? <GreetUser user={user.user} /> : <Greet />
}

const GreetUser = ({ user }: Iuser) => {
    return <Typography color='text.secondary'>Hello {user.displayName}!</Typography>
}

const Greet = () => {
    return <Typography color='text.secondary'>Hello guest! Welcome to the homepage!</Typography>
}
