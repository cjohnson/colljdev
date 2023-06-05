import React from 'react';

import HomeHero from '@/components/app/HomeHero';
import Resume from '@/components/app/Resume';
import Footer from '@/components/app/Footer';

const theme = 'dark';

export default function Home() {
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <HomeHero />
      <Resume />
      <Footer />
    </div>
  )
}