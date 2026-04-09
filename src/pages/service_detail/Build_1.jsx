import React from 'react'
import PortfolioSection from '../components/PortfolioSection'
import PortfolioShowcase from '../components/PortfolioShowcase'
import BuildProcess from '../components/BuildProcess'
import Build_shopify from '../components/Build_shopify'
import Footer from '../../components/Footer'

const Build_1 = () => {
  return (
    <div className='bg-light-bg'>
      <PortfolioSection/>
      <BuildProcess/>
      <PortfolioShowcase/>
      <Build_shopify/>
      <Footer/>
    </div>
  )
}

export default Build_1
