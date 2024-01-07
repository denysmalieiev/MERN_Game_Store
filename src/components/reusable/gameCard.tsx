import {useNavigate} from "react-router-dom" ;
import { useState,useEffect } from "react";
import {ApiData} from "../../redux/getGamesSlice";
type Props = {
  data:ApiData
}

const Game_card = ({data}:Props)=>{
  const navigate = useNavigate()  
  const [localStore, setLocalStore] = useState<ApiData[]>([]);

useEffect(()=>{ 
  const array:ApiData[] = [...localStore]
 const storedCart = localStorage.getItem('cart') 
 if(storedCart){
   const storedCartEl:ApiData[] = JSON.parse(storedCart) 
   storedCartEl.forEach(item=>{
     array.push(item)
   })
 } 
 localStorage.setItem('cart',JSON.stringify(array))
},[localStore])

  const handleClick = () => {
    setLocalStore([data]);
  };

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
    <button className=" bg-purple-500 w-50 p-2 text-sm rounded text-white font-bold bottom-0"  onClick={handleClick}>+CART</button>
    </div>
    </>
    )
}
export default Game_card