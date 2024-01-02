import {Header} from "../components/header"
import {useMemo} from "react"
import Display_games from "../components/reusable/displayGames"

type Props = {
 category: string,
 games: {
title: string,
      img: string,
      description: string,
      category: string,
      cost: string,
      trailer: string,
      platform: string,
      release: string,
      publisher: string,
 }[]
}

const Category_page = ({category,games}:Props)=>{
  const filteredGames = useMemo(()=>{
    return   games.filter((item)=>item.category==category)
  },[games])
  

  return (
    <>
    <Header/>
    <Display_games games={filteredGames}/>
    </>
    )
}

export default Category_page