import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import GoToTop from './components/go-to-top/GoToTop'
import { Home } from './pages/home/Home'
import { TeamPage } from './pages/team-page/TeamPage'
import { Player } from './pages/player/Player'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/team/:player' element={<Player />} />
        <Route path='*' element={<Home />} />
      </Routes>
    <Footer />
    <GoToTop />
    </>
    
  )
}

export default App