import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Slider from './components/slider/Slider'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <Slider />
    </>
  )
}

export default App
