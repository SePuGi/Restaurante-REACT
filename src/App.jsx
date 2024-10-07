import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from '/src/components/Header'
import Footer from './components/Footer'

import Carta from './content/Carta'
import Menu from './content/Menu'
import Reserva from './content/Reserva'
import Index from './content/Index'

function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/carta" element={<Carta />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reserva" element={<Reserva />}/>
      </Routes>

      <Footer />

    </>
  )
}

export default App
