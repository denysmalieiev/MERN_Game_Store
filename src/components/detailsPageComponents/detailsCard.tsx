 import {ApiData} from "../../redux/getGamesSlice"
  import stars from "../../assets/bookmark-favorite-rating-star-svgrepo-com.svg" 
  import star from "../../assets/badge-favorite-rating-star-svgrepo-com.svg"
  type Selected = {
    selected: ApiData
  }
 export const DetailsCard  = ({selected}:Selected)=>{
  return (
    <>
    <div className="w-[300px] h-fit ml-2  absolute top-52 md:w-[490px] md:h-[388px] text-white rounded ">
    <div className="w-[100%] h-[100%] bg-gray-900 bg-opacity-95 p-6 flex flex-col justify-evenly ">
    <h1 className="font-light text-2xl md:my-2">{selected.title}</h1> 
    <div>Activation</div> 
    <div className="p-1 text-sm border border-[1px] border-white w-fit">{selected.platform}</div> 
    <div className="my-2 flex flex-row items-center justify-evenly w-[95%] md:w-[290px]">
    <span>4.5</span>
    <img src={stars}/> 
    <img src={stars}/>  
    <img src={stars}/> 
    <img src={stars}/>  
    <img src={star}/>  
    <span>123k rating </span></div> 
    <div className="text-2xl font-mono">{selected.cost}</div> 
    <button className="bg-gray-600 my-5 w-[16rem] p-3 text-center text-gray-900 font-bold bg-opacity-100 rounded-full">Add to Cart</button>
    </div> 
    </div>
    </>
    )
}