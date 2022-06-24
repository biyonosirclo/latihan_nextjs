import React from 'react'
import Image from 'next/image'
export default function WelcomeComponenLoading() {
  return (
    <div>
        <h5>Welcome to my loadning avatar</h5>
        <Image src="/images/bg.jpg" width={1920} height={1080} alt="bg" layout='intrinsic'/> 
    </div>
  )
}
