import  { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";  
import { RootState, AppDispatch } from "../redux/store"; 
import { fetchGames } from "../redux/getGamesSlice";
import { Header } from "../components/header";
import { useParams } from "react-router-dom";
import { DetailsCard } from "../components/detailsPageComponents/detailsCard";
import { GameInfo } from "../components/detailsPageComponents/gameInfo"; 
import {Footer} from "../components/footer"



const DetailsPage = () => { 
  const {title} = useParams() 
const dispatch = useDispatch<AppDispatch>()
const data = useSelector((state:RootState)=>state.GamesReducer.all) 
  useEffect(()=>{
 dispatch(fetchGames())
  },[])

const filtered = data.filter(item=>item.title===title)

const selected = filtered[0]

  return (
    <> 
      <Header />
      <div>
        <div className="bg-black">
          <div className="relative">
            <img src={selected.img} className="w-screen h-60 md:h-96" />
            <DetailsCard selected={selected} />
            <div className="w-screen md:h-[320px] h-[333px] bg-black"></div>
            <GameInfo selected={selected} />
          </div>
        </div> 
      </div> 
      <Footer/>
    </>
  );
};

export default DetailsPage;
