import React from 'react'
import GenreList from '../components/GenreList'

//Atalho -> rfce 
function Home() {
  return (
    <div className='grid grid-cols-4 px-8'>
    <div className='hidden md:block'>
      <GenreList/>
      </div>
    <div className='col-span-4 md:col-span-3 bg-blue-400'>Game List</div>
    </div>
  )
}

export default Home