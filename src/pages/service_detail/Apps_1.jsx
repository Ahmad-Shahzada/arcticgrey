import React from 'react'
import Apps_hero from '../components/Apps_hero'
import TrustedBrandsMarquee from '../components/TrustedBrandsMarquee'
import WhyWorkWithUs from '../components/WhyWorkWithUs'
import PrivateAppsSection from '../components/PrivateAppsSection'
import ProcessSlider from '../components/ProcessSlider'
import FAQSection from '../components/FAQSection'
import Footer from '../../components/Footer'

const Apps_1 = () => {
  return (
    <div className='bg-light-bg'>
      <Apps_hero/>
      <TrustedBrandsMarquee/>
      <WhyWorkWithUs/>
      <PrivateAppsSection/>
      <ProcessSlider/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default Apps_1
