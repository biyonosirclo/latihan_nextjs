import Head from 'next/head'
import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children, title='Avatar Karakter'}) {
    
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Navbar/>
            {children}
        <Footer />
    </>
        
  )
}
