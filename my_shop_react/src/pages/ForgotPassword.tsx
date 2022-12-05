import { useState } from 'react'
import { Button, Alert, TextField, Paper, Avatar, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from '../context/AuthContext'

export const ForgotPassword = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { resetPassword }: any = useAuth()

    const retrieveEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(email)
            setError('A reset password email has been sent!')
        } catch (e) {
            setError('Failed to reset password!')
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
                    Forgot Password
                    {error && (
                        <Alert variant='standard' color='error'>
                            {error}
                        </Alert>
                    )}
                </Typography>
                <TextField label='Email Address' variant='filled' placeholder='Enter email address' type='email' value={email} onChange={retrieveEmail} fullWidth required />
                <Button type='submit' color='primary' variant='contained' disabled={loading} fullWidth>
                    Submit
                </Button>
                <Button href='/users/login' color='inherit'>
                    Return to Login Page
                </Button>
            </Paper>
        </Box>
    )
}
