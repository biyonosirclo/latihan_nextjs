import Image from 'next/image';
import React from 'react'

function detailRendering(props) {
    const {data} = props;
    console.log(data);

  return (
    <>
        <div className='container'>
            <h3>detail data Rendering</h3>
            {
                data && data.map((item) =>(
                    <div className='card' key={item.idMeal}>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Image src={item.strMealThumb} width={400} height={300} alt={item.strMeal} />
                            </div>
                            <div className='col-md-8'>
                                <h5>{item.strMeal}</h5>
                                <p>{item.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
           
        </div>
    </>
  )
}

export async function getServerSideProps(context){
    const id = context.params.id;
    console.log(id);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();

    return {
        props:{
            data : data.meals
        }
    }
}

export default detailRendering