import {useEffect} from "react" 
import {useDispatch,useSelector} from "react-redux"
import {Routes, Route} from "react-router-dom" 
import {fetchGames} from "./redux/getGamesSlice" 
import type {RootState,AppDispatch} from "./redux/store"
import Homepage from "./pages/homepage"
import CartPage from "./pages/cartPage"
import Category_page from "./pages/categoryPage" 
import DetailsPage from "./pages/detailsPage"

function App() {
  const dispatch = useDispatch<AppDispatch>() 
  const data = useSelector((state:RootState)=>state.GamesReducer.all)
   useEffect(() => {
dispatch(fetchGames())
   },[])

  return (
    <>
    <div className="h-[100%] bg-gray-100">
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/cart" element={<CartPage/>}/> 
    <Route path="/details" element={<DetailsPage/>}/>
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
