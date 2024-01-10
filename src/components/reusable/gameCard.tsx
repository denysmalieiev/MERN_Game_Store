import {useNavigate} from "react-router-dom" ;
import {ApiData} from "../../redux/getGamesSlice";
import {AddToCartBtn} from "./addToCartBTN"

type Props = {
  data:ApiData
} 

export type Count = {
      title: string,
      img: string,
      description: string,
      category: string,
      cost: string,
      trailer: string,
      platform: string,
      release: string,
      publisher: string,
      count:number
}

const Game_card = ({data}:Props)=>{
  const navigate = useNavigate()  
  
  return (
    <>
    <div className="flex flex-col  w-fit p-1 md:p-2 rounded shadow-sm bg-white justify-between">
    <div className="flex flex-col w-40 md:w-72  rounded  bg-white justify-between md:flex-row ">
    <img src={data.img} className="w-40 md:w-3/5 md:mr-1 h-32 md:h-40 rounded" onClick={ ()=>{
 navigate(`/details/${data.title}`)
 }}/>
    <div className="flex flex-col md:w-2/5 justify-between">
    <div className="font-bold text-sm text-gray-600 ">{data.title}</div>
    <div className="text-sm text-gray-500 font-light">{data.category}</div>
    <div className="text-sm font-bold text-gray-500">{data.cost}</div>
    </div>
    </div>
    <AddToCartBtn data={data} Class="bg-purple-500 w-50 p-2 text-sm rounded text-white font-bold bottom-0"/>
    </div>
    </>
    )
}
export default Game_card