import { React } from 'react';
import ThemeProvider from '@/components/app/theme-provider';

import HomeHero from '@/components/app/HomeHero';
import Resume from '@/components/app/Resume';
import Footer from '@/components/app/Footer';

export default function Home() {
  const themeContext = {
    theme: 'dark',
    tailwindTheme: 'dark',
    iconTheme: 'ffffff',
  };

  return (
    <ThemeProvider value={themeContext}>
      <div className={themeContext.tailwindTheme}>
        <HomeHero themeContext={themeContext} />
        <Resume />
        <Footer />
      </div>
    </ThemeProvider>
  )
}