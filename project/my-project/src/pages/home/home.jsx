import React from 'react'
import Header from '../../components/header/header'
import Hero from '../../sections/hero-sections/Hero'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero h1Text={"Your Favourite Food Delivery Partner"} ptext={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, rerum ducimus pariatur sit quis deserunt consectetur?"}
        imagePath={'images/hero-section.png'}
        />
    </div>
  )
}

export default Home