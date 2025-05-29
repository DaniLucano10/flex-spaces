import React from 'react'
import Hero from './Hero/Hero';
import Services from './services/Services';
import Benefits from './benefits/Benefits';
import Price from './price/Price';
import Questions from './questions/Questions';
import Contact from './contact/Contact';
import Map from './map/Map';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Benefits />
      <Price />
      <Map />
      <Questions />
      <Contact />
    </div>
  )
}

export default Home;