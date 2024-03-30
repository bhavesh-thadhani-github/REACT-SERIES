import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
    // const [data,setData] = useState([])
    
    //we want that useEffect gets call (and we get the api) when the component gets loaded
    /*useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)   
        })
    }, [])*/
    //now since we have commented this, we 'll not get the properteis like data.followers, data.avatar_url
    const data = useLoaderData()

    return(
        // This data.followers & data.avatar_url are api object properties that you have to study
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers} 
        <img src={data.avatar_url} alt="Git picture" width={300}/>
        
        {/*OPTIONAL:- <div className="text-xl">{data.bio}</div> */} 
        </div>
    )
}

//For Loader
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}
