import {useEffect,useState} from "react"
import {Routes, Route} from "react-router-dom"
import Homepage from "./pages/homepage"
import CartPage from "./pages/cartPage"
import Category_page from "./pages/categoryPage"

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

function App() {
  
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

  return (
    <>
    <div className="h-[100%] bg-gray-100">
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
<Route path="/category/Action" element={<Category_page category="Action" games={data}/>}/>
<Route path="/category/Race" element={<Category_page category="Race" games={data}/>}/>
<Route path="/category/Sports" element={<Category_page category="Sports" games={data}/>}/>
<Route path="/category/Adventure" element={<Category_page category="Adventure" games={data}/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
