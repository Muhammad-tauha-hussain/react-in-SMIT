import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Slider from './components/slider/Slider'
import Virtual from './components/virtual/Virtual'
import Products from './components/products/Products'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Modal from './components/modal/Modal'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <Slider />
    <Virtual />
    <Products />
    <Testimonials />
    <Footer />
    <Modal/>
    </>
  )
}

export default App
