import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()

    // const [data,setData]=useState([])
    // useEffect(() => {
    //   fetch("https:api.github.com/users/tapaspradhan")
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img className='my-3 flex items-center justify-center' src={data.avatar_url} alt="Git Picture" width={300}
     />
    </div>
  )
}

export default Github

export const githubInfoLoder=async()=>{
  const response=await fetch("https:api.github.com/users/tapaspradhan")
  return response.json()
}