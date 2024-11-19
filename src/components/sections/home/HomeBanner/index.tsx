import React from 'react'
import Hero from './hero'
import Services from './services'

type Props = {}

function HomeBanner({}: Props) {
  return (
    <div className='bg-white relative w-full overflow-hidden'>
      <Hero />
      
      <Services/>
    </div>
  )
}

export default HomeBanner