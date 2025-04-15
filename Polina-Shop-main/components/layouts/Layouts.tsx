import React from 'react';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}