

type Props = {
  src:string,
  title:string,
  cost:string,
  category:string
}

const Game_card = (props:Props)=>{
  
  {/*      <Game_card src={} title={} cost={} category={}/>*/}
  return (
    <>
    <div className="flex flex-col  w-fit p-1 md:p-2 rounded shadow-sm bg-white justify-between">
    <div className="flex flex-col w-40 md:w-72  rounded  bg-white justify-between md:flex-row ">
    <img src={props.src} className="w-40 md:w-3/5 md:mr-1 h-32 md:h-40 rounded"/>
    <div className="flex flex-col md:w-2/5 justify-between">
    <div className="font-bold text-sm text-gray-600 ">{props.title}</div>
    <div className="text-sm text-gray-500 font-light">{props.category}</div>
    <div className="text-sm font-bold text-gray-500">{props.cost}</div>
    </div>
    </div>
    <button className=" bg-purple-500 w-50 p-2 text-sm rounded text-white font-bold bottom-0">+CART</button>
    </div>
    </>
    )
}
export default Game_card