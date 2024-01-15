import {useState} from "react"
import {useSelector} from "react-redux"  
import {useNavigate} from "react-router-dom" ;
import {RootState} from "../redux/store"
export const SearchBar = ()=>{
  const [input,setInput] = useState("")  
  const games = useSelector((state:RootState)=>state.GamesReducer.all) 
  const navigate = useNavigate()
  return(
    <>
    <div className="shadow-md p-2 items-center flex flex-row relative md:shadow-blue-100 bg-white ">
    <input className="md:w-80  outline-none rounded bg-blue-100 placeholder-blue-600 md:bg-white p-2 w-screen" value={input} placeholder="search..." onChange={(e:any)=>setInput(e.target.value)}/> 
    { input!==""&&(
    <div className="w-[90%] absolute top-20 h-30 bg-gray-100 fixed rounded p-3 z-30">
    <ul>
    {
      games.map(item=>{
        if(item.title.toLowerCase().includes(input.toLowerCase())){
          return(<li key={item.title} className="p-3 hover:bg-white hover:text-purple-500 hover:font-bold" onClick={ ()=>{
 navigate(`/details/${item.title}`)
 }}>
          {item.title}
          </li>)
        }
      })
    } 
    </ul>
    </div>
    )}
    </div> 

    </>    
    )
}