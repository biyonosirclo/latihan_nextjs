import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>
            <Link href={'rendering/csr'}><a>
                <div className='card'>
                    <div className='card-body text-center'>
                        CSR
                    </div>
                </div>
            </a></Link>
        </div>
        <div className='col-md-4'>
            <Link href={'rendering/ssr'}><a>
                <div className='card'>
                    <div className='card-body text-center'>
                        SSR
                    </div>
                </div>
            </a></Link>
        </div>
        <div className='col-md-4'>
            <Link href={'rendering/isg'}><a>
                <div className='card'>
                    <div className='card-body text-center'>
                        ISG
                    </div>
                </div>
            </a></Link>
        </div>
        <div className='col-md-4'>
            <Link href={'rendering/ssg'}><a>
                <div className='card'>
                    <div className='card-body text-center'>
                        SSG
                    </div>
                </div>
            </a></Link>
        </div>
      </div>
    </div>
  )
}
