import React from 'react'
import Image from 'next/image'
export default function WelcomeComponenNoSsr() {
  return (
    <div>
        <h5>Welcome Componen No Ssr</h5>
        <Image src="/images/aang.jpg" width={1920} height={1080} alt="bg" layout='intrinsic'/> 
    </div>
  )
}
