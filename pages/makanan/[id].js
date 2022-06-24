import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function makananDetail() {
    const [data,setData] = useState();

    const router = useRouter();
    
    const { query } = router;

    const callApi = async() => {
        try{
            console.log(query.id);
            const res = await fetch('/api/makanan/'+query.id);
            const data = await res.json();
            setData(data);
            console.log(data);
        }catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        callApi();
    }, []);
  return (
    <div>
        <div className='container'>
            
            <div className=''>
                { 
                    
                    data &&  (
                        <div className='' key={data.id}>
                            
                            <div className='card '>
                                <div className='row'>
                                    <div className='col-md-4'>

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
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h3>{data.title}</h3>
                                            <p>
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}
