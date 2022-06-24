import Link from 'next/link';
import Image from 'next/image';
import { avatars } from '@/sample_data/data_avatar';
import Head from 'next/head';
export default function AvatarIndex() {
    return (
      <>
        <Head>
            <title>List Avatar</title>
            <meta name='description' content="daftar avatar,Karakter avatar" />
        </Head>
        <div className='container'>
        <h1>Data Avatar Dari Datajs</h1>
            <div className='row'>
                { avatars.map((avatar) => (
                    <div key={avatar._id} className="col-md-4">

                        <Link href={
                            {
                                pathname: `/avatar/${avatar._id}`, 
                                query:{
                                    id:avatar._id,
                                    nama:avatar.name,
                                    position:avatar.position,
                                    gender:avatar.gender,
                                    profession:avatar.profession,
                                    photoUrl:avatar.photoUrl,
                                }
                            }
                            } >
                            <a>
                                <div className='card'>
                                    <Image 
                                        src= {avatar.photoUrl}
                                        width={16} 
                                        height={9} 
                                        
                                        alt={ avatar.name} 
                                        placeholder='blur'
                                        blurDataURL={avatar.photoUrl}
                                        layout='responsive' 
                                        // objectFit='contain'
                                    />
                                    <div className='card-body'>
                                        <h5 className='text-center'>{ avatar.name }</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
                
            </div>
        </div>
        
      </>
    );
  }