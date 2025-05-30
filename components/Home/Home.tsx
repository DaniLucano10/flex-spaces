import Benefits from "./benefits/Benefits";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Map from "./map/Map";
import Price from "./price/Price";
import Questions from "./questions/Questions";
import Services from "./services/Services";


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