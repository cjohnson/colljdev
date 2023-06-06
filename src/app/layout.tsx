import './globals.css'

import React from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import ThemeProvider from '@/components/app/ThemeProvider'

export const metadata = {
  title: 'Collin Johnson - Resume',
  description: 'Collin Johnson\'s resume: pursuing a career in Software Engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='main-content-body'>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
