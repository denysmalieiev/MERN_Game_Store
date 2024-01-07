 import {ApiData} from "../../redux/getGamesSlice" 
 import { Qualifier }  from "./cartQualifier" 
 
 type Props = {
   data : ApiData[]
 }
 export const Cart_card = ({data}:Props)=>{
  
  return(
    <>
    <div>
    {
      data.map(item=>{
        return(
 <section key={item.title} className="p-2 bg-white shadow-sm  my-4 mx-2 rounded">
    <div className="flex flex-row ">
    <img src={item.img} className="w-36 rounded"/>
    <div className="ml-2">
    <div className="text-sm text-gray-400">{item.title}</div>
    <div className="font-bold">{item.cost}</div>
    </div>
    </div>
    
    <div className="flex flex-row justify-between pt-1">
    <button className="btn bg-red-600 text-xs p-1" >remove</button> 
    <Qualifier title={item.title}/>
    </div>
    </section>
        )
      })
    }
    </div>

    </>
    )
}