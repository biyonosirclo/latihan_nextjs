import Link from 'next/link';
import React from 'react'

function Isg(props) {
    const { data } = props;
    console.log(data);

  return (
    <>
        <div className='container'>
            <h3>Rendering fetch data dengan ISG</h3>
            <ul>
                {
                    data.map((item) => (
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

export async function getStaticProps(){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();

    return {
        props:{
            data: data.meals
        },
        revalidate : 10
    }
}

export default Isg
