import { useEffect } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const Logout = (): JSX.Element => {
    const { logout }: any = useAuth()
    const navigate: NavigateFunction = useNavigate()

    useEffect(() => {
        handleLogout()
    })

    const handleLogout = (): void => {
        try {
            logout()
            navigate('/')
        } catch (e) {
            console.log('Failed to logout!' + e)
        }
    }

    return <></>
}
