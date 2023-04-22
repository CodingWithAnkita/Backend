import React from 'react'
import About from './About'
import Hero from './Hero'
import Services from './Services'
import Clients from './Clients'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Clients/>
    </div>
  )
}

export default Home