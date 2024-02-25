import React, { useEffect, useState } from 'react'
import GlobalApi from '../service/GlobalApi';

function GenreList() {
    const [genreList,setGenreList]=useState([])

    useEffect(()=>{
        getGenreList();
    },[])

    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);

        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>
            
            {genreList.map((item)=>(
                <div className='flex gap-2 items-center mb-2 cursor pointer 
                hover:bg-gray-300 p-2 group
                rounded-lg hover:dark:bg-gray-600'>
                <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300' />
                <h3 className='dark:white text-[18px]
                group-hover:font-bold  transition-all ease-out duration-300'>{item.name}</h3>
                </div>
            ))}
            Genre
        </h2>
    </div>
  )
}

export default GenreList