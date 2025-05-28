import React from 'react'
import Hero from './Hero/Hero';
import Footer from './footer/Footer';
import Services from './services/Services';
import Benefits from './benefits/Benefits';
import Price from './price/Price';
import Questions from './questions/Questions';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Benefits />
      <Price />
      <Questions />
      <Footer />
    </div>
  )
}

export default Home;