 import { Qualifier }  from "./cartQualifier" 
 type Props = { 
   data:{
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
}[],
   setData: any
 }
 
 export const Cart_card = ({data,setData}:Props)=>{   
   
   const deleteItem = (title:string)=>{ 
    
try{
  const filteredData = data.filter(item => item.title !== title);

  localStorage.setItem('cart',JSON.stringify(filteredData)) 
  setData(filteredData)
    }catch(err){alert(err)}
   }
   
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
    <button className="btn bg-red-600 text-xs p-1" onClick={()=>{deleteItem(item.title)}}>remove</button> 
    <Qualifier data={item}/>
    </div>
    </section>
        )
      })
    }
    </div>

    </>
    )
}