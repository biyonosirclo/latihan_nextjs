import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Csr() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                console.log(data)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <>
            <div className='container'>
                <h3>Rendering data fetch menggunakan CSR</h3>
                <div>
                    {
                        <ul>
                            {
                                data.meals.map((item) => (
                                    <li key={item.idMeal}>
                                        <Link href={`/rendering/${item.idMeal}`} >
                                            <a>{item.strMeal}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        
                    }
                </div>
            </div>
            
        </>
        
    )

    
}
