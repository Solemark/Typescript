import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Box, createTheme, ThemeProvider } from '@mui/material'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { CharacterDetails } from './pages/CharacterDetails'
import { Weapons } from './pages/Weapons'
import { Artifacts } from './pages/Artifacts'

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

export const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Navbar />
                <Box role='presentation' sx={{ display: 'flex', flexDirection: 'row', paddingBlock: '5px' }}>
                    <Box role='presentation' width='80%' color='white' sx={{ paddingInline: '5px' }}>
                        <Router>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/characters' element={<Characters />} />
                                <Route path='/characters/:name' element={<CharacterDetails />} />
                                <Route path='/weapons' element={<Weapons />} />
                                <Route path='/artifacts' element={<Artifacts />} />
                            </Routes>
                        </Router>
                    </Box>
                    <Box role='presentation' width='20%' color='white' sx={{ paddingInline: '5px' }}>
                        <Sidebar />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
