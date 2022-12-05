import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Paper, Box, Container, Avatar, Alert, TextField, Typography } from '@mui/material'
import { useAuth } from '../context/AuthContext'

export const ProfileUpdate = (): JSX.Element => {
    const { updateName, updateEmail, updatePassword, currentUser }: any = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (password !== password2) {
            return setError('Passwords do not match!')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (name) {
            promises.push(updateName(name))
        }
        if (email !== currentUser.email) {
            promises.push(updateEmail(email))
        }
        if (password) {
            promises.push(updatePassword(password))
        }
        Promise.all(promises)
            .then(() => {
                navigate('/profile')
            })
            .catch(() => {
                setError('Failed to update account')
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <Paper elevation={10} sx={{ maxWidth: 500 }}>
                <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Avatar sx={{ backgroundColor: 'green', color: 'inherit' }}>U</Avatar>
                </Container>
                <Typography>
                    Update Account
                    {error && (
                        <Alert variant='standard' color='error'>
                            {error}
                        </Alert>
                    )}
                </Typography>
                <TextField
                    label='Name'
                    variant='filled'
                    placeholder='Enter name'
                    type='text'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    fullWidth
                />
                <TextField
                    label='Email Address'
                    variant='filled'
                    placeholder='Enter email address'
                    type='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    fullWidth
                />
                <TextField
                    label='Password'
                    variant='filled'
                    placeholder='Enter password'
                    type='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    fullWidth
                />
                <TextField
                    label='Confirm Password'
                    variant='filled'
                    placeholder='Retype password'
                    type='password'
                    value={password2}
                    onChange={(e) => {
                        setPassword2(e.target.value)
                    }}
                    fullWidth
                />
                <Button type='submit' color='primary' variant='contained' disabled={loading} fullWidth>
                    Submit
                </Button>
                <Button variant='text' href='/users/login' color='inherit'>
                    Return to Login Page
                </Button>
            </Paper>
        </Box>
    )
}
