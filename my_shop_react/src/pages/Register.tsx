import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Alert, TextField, Paper, Avatar, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from '../context/AuthContext'

export const Register = (): JSX.Element => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { register }: any = useAuth()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (password !== password2) {
            return setError('Passwords do not match!')
        }
        try {
            setError('')
            setLoading(true)
            await register(name, email, password)
            navigate('/')
        } catch (e) {
            setError('Failed to create user!')
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
                    Register
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
                    required
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
                    required
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
                    required
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
                    required
                />
                <Button type='submit' color='primary' variant='contained' disabled={loading} fullWidth>
                    Submit
                </Button>
                <Button variant='text' href='/users/login' color='inherit'>
                    Already have an account?
                </Button>
            </Paper>
        </Box>
    )
}
