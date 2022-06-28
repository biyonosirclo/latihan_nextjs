import Link from 'next/link';
import React from 'react'

function Ssr(props) {
    const {data} = props;
    console.log(data)
  return (
    <>
        <div className='container'>
            <h4>Data Fetch menggunakan SSR</h4>
            <ul>
                {
                    data.meals.map((item)=>(
                        <li key={item.idMeal}>
                            <Link href={`/rendering/${item.idMeal}`} >
                                <a>{item.strMeal}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
    
  )
}

export async function getServerSideProps(){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();

    return {
        props:{
            data
        },
    }
}

export default Ssr