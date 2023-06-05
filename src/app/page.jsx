'use client';

import { useContext } from 'react';

import HomeHero from '@/components/app/HomeHero';
import Resume from '@/components/app/Resume';
import Footer from '@/components/app/Footer';
import { ThemeContext } from '@/components/app/ThemeProvider';

export default function Home() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.tailwindTheme}>
      <HomeHero />
      <Resume />
      <Footer />
    </div>
  )
}