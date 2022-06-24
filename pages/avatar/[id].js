import Head from 'next/head';
import Image from 'next/image';
import {useRouter } from 'next/router';

export default function AvatarDetail() {
    const router = useRouter();
    const { query } = router;
  return (
    <div>
        <Head>
            <title>Karakter : {query.nama}</title>
            <meta name='description' content="daftar avatar,Karakter avatar " />
        </Head>
        <div className='container'>
            <h1>Informasi Detail avatar : {query.nama}</h1>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Image 
                            src={query.photoUrl} 
                            width={16} 
                            height={9} 
                            alt={query.nama} 
                            placeholder='blur'
                            blurDataURL={query.photoUrl}
                            layout='responsive' 
                            objectFit='contain'
                        />
                    </div>
                    <div className='col-md-8'>
                        <table >
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>{query.nama}</td>
                                </tr>
                                <tr>
                                    <td>position</td>
                                    <td>{query.position}</td>
                                </tr>
                                <tr>
                                    <td>gender</td>
                                    <td>{query.gender}</td>
                                </tr>
                                <tr>
                                    <td>profession</td>
                                    <td>{query.profession}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    </div>
  )
}
