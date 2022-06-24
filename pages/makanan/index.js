import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Makanan() {
    const [data,setData] = useState();
    const callApi = async() => {
        try{
            const res = await fetch('/api/makanan');
            const data = await res.json();
            setData(data);
            console.log(data);
        }catch (err){
            console.log(err);
        }
    }
  return (
    <div>
        <div className='container'>
            <h3 className='text-center'>Daftar Kategori Makanan</h3>
            <button className='btn' onClick={callApi}>Tampilkan data kategori makanan</button>
            <div className='row'>
                { 
                    data && data.map((data) => (
                        <div className='col-md-4' key={data.id}>
                            <Link href={{
                                pathname: `/makanan/${data.id}`,
                                query:{
                                    id:data.id,
                                }
                             }} as={`/makanan/${data.id}`}><a>
                                <div className='card'>
                                    
                                    <Image 
                                        src= {data.thumb}
                                        width={16} 
                                        height={9} 
                                        
                                        alt={ data.title} 
                                        placeholder='blur'
                                        blurDataURL={data.thumb}
                                        layout='responsive' 
                                        // objectFit='contain'
                                    />
                                    <div className='card-body'>
                                        <h6 className='text-center'>{data.title}</h6>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}
