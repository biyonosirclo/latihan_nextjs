import React from 'react'

function Ssr(props) {
    console.log(props.data);
    return null
    
}

export async function getServerSidePorps(){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();
    return {
        props:{
            data
        },
    }
}

export default Ssr