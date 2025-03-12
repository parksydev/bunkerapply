'use client'

import './globals.css';
import Navigation from './navigation/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
