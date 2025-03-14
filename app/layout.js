'use client'

import './globals.css';
import Navigation from './navigation/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#121212', margin: 0, padding: 0 }}>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
