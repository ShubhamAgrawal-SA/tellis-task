"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const Home = () => {
    const  getTodo = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5 ');
        return res.data;
    }
    const {data,error} = useQuery({
        queryKey:['todo'],
        queryFn:getTodo
    })
    console.log(data)
  return (
    <div>
      {
        data?data.map((item:any)=>(
            <div className='flex gap-4'>
                <h2 className='mt-4 capitalize'>{item.title}</h2>
                <button>remove</button>
            </div>
        )):''
      }
    </div>
  )
}

export default Home
