 import {useState,useEffect} from "react"
 import {Header} from "../components/header"
import {MiniMenu} from "../components/minimenu"
import {Promo} from "../components/promo"
import Display_games from "../components/reusable/displayGames"

type ApiData = {
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



 export const HomePage = ()=>{
   const [data,setData] = useState<ApiData>([])
   useEffect(() => {
    const getData = async () => {
      try {
        const fetchEl = await fetch("https://gamesapi-8lyv.onrender.com/");
        if (!fetchEl.ok) {
          throw new Error('Network response was not ok.');
        }
        const response = await fetchEl.json();
        setData(response);
      } catch (error) {
        // Handle fetch errors here
        console.error('Error fetching data:', error);
      }
    };
    getData()
   },[])
   
   const trendingGames = data.filter((_item,index)=>index<6)
const popularGames = data.filter((_item,index)=>index<15&&index>9)
const recommendedGames = data.filter((_item,index)=>index>10)
const upComingGames = data.filter((_item,index)=>index<10&&index>5)
   
   return (
     <div className="overflow-hidden">
        <Header/>
        <div className="md:flex md:flex-row-reverse ">
        <Promo/>
        <MiniMenu/>
        </div>
        <div>
        
        <div className="bg-red-700  mb-2  text-white font-bold p-2">Trending</div>
<Display_games games={trendingGames}/>
        </div>
        
        <div>
        <div className="bg-red-700  mb-2  text-white font-bold p-2">Popular</div>
<Display_games games={popularGames}/>
        </div>
        
        
        <div>
        <div className="bg-red-700  mb-2  text-white font-bold p-2">Recommended</div>
<Display_games games={recommendedGames}/>
        </div>
        <div>
        <div className="bg-red-700 text-white font-bold p-2">Upcoming</div>
  <Display_games games={upComingGames}/>
        </div>

     </div>
     )
 }
 
 export default HomePage