import React from 'react'
import Image from 'next/image'

export default function WelcomeComponenSsr() {
  return (
    <div>
        <h5>Welcome Componen with Ssr</h5>
        <Image src="/images/logo.jpg" width={1920} height={1080} alt="bg" layout='intrinsic'/> 
    </div>
  )
}
