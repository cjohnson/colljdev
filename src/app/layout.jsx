import './globals.css'

export const metadata = {
  title: 'Collin Johnson - Resume',
  description: 'Collin Johnson\'s resume: pursuing a career in Software Engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='main-content-body'>{children}</body>
    </html>
  )
}
