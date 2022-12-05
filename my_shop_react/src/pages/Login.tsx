import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Alert, TextField, Paper, Avatar, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from '../context/AuthContext'

export const Login = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login }: any = useAuth()
    const navigate = useNavigate()

    const retrieveEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const retrievePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            navigate('/')
        } catch (e) {
            setError('Failed to login!')
        }
        setLoading(false)
    }
    return (
        <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <Paper elevation={10} sx={{ maxWidth: 500 }}>
                <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Avatar sx={{ backgroundColor: 'green', color: 'inherit' }}>U</Avatar>
                </Container>
                <Typography>
                    Login
                    {error && (
                        <Alert variant='standard' color='error'>
                            {error}
                        </Alert>
                    )}
                </Typography>
                <TextField label='Email Address' variant='filled' placeholder='Enter email address' type='email' value={email} onChange={retrieveEmail} fullWidth required />
                <TextField label='Password' variant='filled' placeholder='Enter password' type='password' value={password} onChange={retrievePassword} fullWidth required />
                <Button type='submit' color='primary' variant='contained' disabled={loading} fullWidth>
                    Submit
                </Button>
                <Container>
                    <Button href='/users/register' color='inherit'>
                        Create an account
                    </Button>
                    <Button href='forgot-password' color='inherit'>
                        Forgot Password?
                    </Button>
                </Container>
            </Paper>
        </Box>
    )
}
