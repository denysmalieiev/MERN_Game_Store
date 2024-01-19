import {Waiting_Api} from "../waitingApi"
import Game_card from "../reusable/gameCard"

type ApiData = {
  games:{
      title: string,
      img: string,
      description: string,
      category: string,
      cost: string,
      trailer: string,
      platform: string,
      release: string,
      publisher: string,}[]

}

  const  Display_games = ({games}:ApiData)=>{
  
  return (
    <> 
        <div className="overflow-scroll">
<div className="grid grid-cols-2 md:grid-cols-3 md:gap-15 gap-2  p-2   w-max md:items-center ">
        {
          games.length>0?games.map((item)=>{
            return(
   <Game_card data={item}/>
            )
          }):<Waiting_Api/>
        }
        </div>
        </div>
    </>
    )
}

export default Display_games 