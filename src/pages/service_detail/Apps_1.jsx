import React from 'react'
import Apps_hero from '../components/Apps_hero'
import TrustedBrandsMarquee from '../components/TrustedBrandsMarquee'
import WhyWorkWithUs from '../components/WhyWorkWithUs'
import PrivateAppsSection from '../components/PrivateAppsSection'

const Apps_1 = () => {
  return (
    <div className='bg-light-bg'>
      <Apps_hero/>
      <TrustedBrandsMarquee/>
      <WhyWorkWithUs/>
      <PrivateAppsSection/>
    </div>
  )
}

export default Apps_1
