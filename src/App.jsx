import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Aboutme from './pages/Aboutme'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'


import './App.css'





function App() {
  

  return (
   <div>
     <Header />
      <Routes>
        <Route  path='/home' element={<Home />}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route path='/aboutme' element={<Aboutme />}/>
      </Routes>
      <Footer />

   </div>
  )
}

export default App
