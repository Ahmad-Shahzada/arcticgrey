import React from 'react'
import ShopifyHeroSection from '../components/HeroPreview'
import Migrate_text from '../components/Migrate_text'
import Migrate_build from '../components/Migrate_build'
import PortfolioShowcase from '../components/PortfolioShowcase'
import MigrationProcess from '../components/MigrationProcess'
import WhyShopifySection from '../components/WhyShopifySection'
import Footer from '../../components/Footer'

const Migrate_1 = () => {
  return (
    <div className='bg-light-bg'>
      <ShopifyHeroSection />
      <Migrate_text />
      <Migrate_build />
      <PortfolioShowcase />
      <MigrationProcess />
      <WhyShopifySection />
      <Footer />

    </div>
  )
}

export default Migrate_1
