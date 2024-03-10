import React, { useEffect } from "react"
import { FaStar, FaComment, FaFire } from 'react-icons/fa'; // Importando o ícone de estrela, de comentário e de fogo

function GamesByGenresId({gameList,selectedGenresName}) {
  useEffect(()=>{
    console.log("GameList",gameList)
  },[])
  return (
   <div>
    <h2 className="font-bold text-[30px] dark:text-white mt-5">{ selectedGenresName} Games</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    gap-6 mt-5">
      {gameList.map((item)=>(
        <div className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full
        hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
          <img src={item.background_image} className="w-full h-[80%] rounded-xl object-cover" />
          <h2 className="text-[20px] dark:text-white font-bold"
          >{item.name}<span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span></h2>
          <div className="flex items-center">
            <FaStar className="text-yellow-500"/> {/* Ícone de estrela */}
            <h2 className="text-gray-500 dark:text-gray-300">{item.rating}</h2>
            <FaComment className="ml-4 text-white"/> {/* Ícone de comentário */}
            <h2 className="text-gray-500 dark:text-gray-300">{item.reviews_count}</h2>
            <FaFire className="ml-4 text-red-500"/> {/* Ícone de fogo */}
            <h2 className="text-gray-500 dark:text-gray-300">{item.suggestions_count}</h2>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GamesByGenresId
