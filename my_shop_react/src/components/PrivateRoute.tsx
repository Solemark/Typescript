import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const UserLoggedIn = ({ component: Component, ...rest }: any): JSX.Element => {
    const { currentUser }: any = useAuth()
    return currentUser ? <Outlet /> : <Navigate to={'/users/login'} />
}

export const UserLogin = ({ component: Component, ...rest }: any): JSX.Element => {
    const { currentUser }: any = useAuth()
    return !currentUser ? <Outlet /> : <Navigate to={'/users/profile'} />
}
