import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/navbar.module.css'

export default function Navbar() {
  return (
    <div className={style.header}>
        <div className='container'>
            <div className={style.navbar}>
                <div>
                    <Link href="/">
                        <a>
                        <div className=''>
                                <Image 
                                src='/images/logo.jpg'
                                width={200}
                                height={200}
                                layout='responsive'
                                alt='logo'
                                className={style.logo}
                                />
                                <div>Avatar</div>
                        </div>
                        
                        </a>
                    </Link>
                </div>
                
                <div className={style.menu}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Homepage</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/avatar">
                                <a>Avatar</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/makanan">
                                <a>Makanan</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </div>

    </div>
  )
}
