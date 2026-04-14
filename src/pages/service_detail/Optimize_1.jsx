import React from 'react'
import OptimizeHero from '../components/Optimize_Hero'
import OptimizeProof from '../components/Optmize_proof'
import CartDrawerOptimizationSection from '../components/Drawer_optimze'
import CartOptimizationBanner from '../components/CartOptimizationBanner'
import DrGreenLifeCaseStudy from '../components/DrGreenLifeCaseStudy'
import BulkHoursChat from '../components/BulkHoursChat'
import Footer from '../../components/Footer'

const Optimize_1 = () => {
  return (
    <div className='bg-light-bg'>
      <OptimizeHero />
      <OptimizeProof />
      <CartOptimizationBanner />
      <CartDrawerOptimizationSection />
      <DrGreenLifeCaseStudy />
      <BulkHoursChat />
      <Footer />
    </div>
  )
}

export default Optimize_1
