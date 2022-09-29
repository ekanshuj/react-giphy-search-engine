import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Stickers from './pages/sticker/Stickers';
import Trending from './pages/gif/Trending';
import Search from './pages/search/Search';


function App() {

  return (
    <>
      <Container className='app'>
        <Routes>
          <Route exact path='/' element={<Trending />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/stickers' element={<Stickers />} />
        </Routes>
      </Container>
      <SimpleBottomNavigation />
    </>
  )
}

export default App
