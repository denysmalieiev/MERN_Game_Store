 import {ApiData} from "../../redux/getGamesSlice"
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
 <section key={item.title} className="p-1 bg-white shadowEl shadow-[rgba(0, 0, 0, .2) m-2 rounded">
    <div className="flex flex-row ">
    <img src={item.img} className="w-36 rounded"/>
    <div className="ml-2">
    <div className="text-sm ">{item.title}</div>
    <div className="font-bold">{item.cost}</div>
    </div>
    </div>
    
    <div className="flex flex-row justify-between pt-1">
    <button className="btn text-xs p-1" >remove</button>
    </div>
    </section>
        )
      })
    }
    </div>

    </>
    )
}