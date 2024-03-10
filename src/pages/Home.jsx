import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../service/GlobalApi'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';

//Atalho -> rfce 
function Home() {
  const [allGameList,setAllGameList]=useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);
  const [ selectedGenresName,setSelectedGenresName] = useState('Action')
  useEffect(()=>{
    getAllGamesList();
    getGamesListByGenresId(4);
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
    })
  }

  const getGamesListByGenresId=(id)=>{
    console.log("GENRENID",id)
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      setGameListByGenres(resp.data.results)
      console.log("Game List By genreId:",resp.data.results);
    })
  }

  return (
    <div className='grid grid-cols-4 px-8'>
    <div className='hidden md:block'>
      <GenreList genereId={(genereId)=>getGamesListByGenresId(genereId)}
       selectedGenresName={ (name)=>setSelectedGenresName(name)}
      />
      </div>
    <div className='col-span-4 md:col-span-3'>
      {allGameList?.length>0&&gameListByGenres.length>0?
      <div>
      <Banner gameBanner={allGameList[0]} />
      <TrendingGames gameList={allGameList}/>
      <GamesByGenresId gameList={gameListByGenres}
      selectedGenresName = {selectedGenresName}
      
      />
      </div>
      :null}
    </div>
    </div>
  )
}

export default Home