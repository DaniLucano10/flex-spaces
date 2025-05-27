import React from 'react'
import Hero from './Hero/Hero';
import Footer from './footer/Footer';
import Services from './services/Services';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}

export default Home;