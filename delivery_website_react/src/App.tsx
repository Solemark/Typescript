import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { Home } from './pages/Home'
import { Quote } from './pages/Quote'
import { Navbar } from './components/Navbar'

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/quote' element={<Quote />} />
                    </Routes>
                </Router>
            </Container>
        </ThemeProvider>
    )
}

export default App
