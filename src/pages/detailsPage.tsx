import {Header} from "../components/header" 
import {DetailsCard} from "../components/detailsPageComponents/detailsCard" 
import {GameInfo} from "../components/detailsPageComponents/gameInfo" 
 const DetailsPage = ()=>{
  
  return(
    <>
    <div className="bg-black h-max">
    <Header/>
    <div className="relative">
    <img src="/src/assets/web-project-2.f0108702.jpg" className="w-screen h-60 md:h-96"/> 
    <DetailsCard/>
    <div className="w-screen md:h-[320px] h-[286px] bg-black"></div>
    <GameInfo/>
    </div>
    </div>
    </>
    )
}

export default DetailsPage