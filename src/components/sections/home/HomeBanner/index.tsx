import React from 'react'
import Hero from './hero'
import Services from './services'

type Props = {}

function HomeBanner({}: Props) {
  return (
    <div className=''>
      <Hero />
      
      <Services/>
    </div>
  )
}

export default HomeBanner