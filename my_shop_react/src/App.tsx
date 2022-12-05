import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { UserLoggedIn, UserLogin } from './components/PrivateRoute'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { Profile } from './pages/Profile'
import { ProfileUpdate } from './pages/ProfileUpdate'
import { Store } from './pages/Store'
import { ItemDetail } from './components/ItemDetail'
import { Register } from './pages/Register'
import { Logout } from './components/Logout'
import { NavbarList } from './components/NavbarList'
import { AboutUs } from './pages/AboutUs'
import { Home } from './pages/Home'
import { Cart } from './components/Cart'
import { AuthProvider } from './context/AuthContext'

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})
const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AuthProvider>
                <Container>
                    <Router>
                        <NavbarList />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/aboutus' element={<AboutUs />} />
                            <Route path='/store' element={<Store />} />
                            <Route path='/store/:id' element={<ItemDetail />} />
                            <Route element={<UserLogin component={undefined} />}>
                                <Route path='/users/register' element={<Register />} />
                                <Route path='/users/login' element={<Login />} />
                                <Route path='/users/forgot-password' element={<ForgotPassword />} />
                            </Route>
                            <Route element={<UserLoggedIn component={undefined} />}>
                                <Route path='/users/profile' element={<Profile />} />
                                <Route path='/users/update' element={<ProfileUpdate />} />
                                <Route path='/users/logout' element={<Logout />} />
                                <Route path='/store/cart' element={<Cart />} />
                            </Route>
                        </Routes>
                    </Router>
                </Container>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
