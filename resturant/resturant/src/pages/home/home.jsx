
import React from 'react'
import Header from '../../components/header/header'
import Hero from '../../components/sections/hero-section/hero'
import About from '../../components/sections/about/about'
import Menu from '../../components/sections/menue/menu'
import Product from '../../components/sections/product/product'
import Reviews from '../../components/sections/reviews/reviews'
import Contact from '../../components/sections/contact/contact'
import Blogs from '../../components/sections/blogs/blogs'
import Footer from '../../components/footer/footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Menu/>
        <Product />
        <Reviews />
        <Contact />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home