import React from 'react';

import HomeHero from '@/components/app/HomeHero';
import Resume from '@/components/app/Resume';
import Footer from '@/components/app/Footer';

const themeContext = {
  theme: 'dark',
  tailwindTheme: 'dark',
  iconTheme: 'ffffff',
};

export default function Home() {
  return (
    <div className={themeContext.tailwindTheme}>
      <HomeHero themeContext={themeContext} />
      <Resume />
      <Footer />
    </div>
  )
}