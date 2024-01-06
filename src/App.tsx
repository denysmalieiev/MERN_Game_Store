import {Routes, Route} from "react-router-dom" 
import Homepage from "./pages/homepage"
import CartPage from "./pages/cartPage"
import Category_page from "./pages/categoryPage" 
import DetailsPage from "./pages/detailsPage"

function App() {

  return (
    <>
    <div className="h-[100%] bg-gray-100">
    <Routes> 
    <Route path="/" element={<Homepage/>}/>
    <Route path="/cart" element={<CartPage/>}/> 
<Route path="/category/:category" element={<Category_page/>}/>
        <Route
          path="/details/:title"
          element={<DetailsPage/>}
        />
    </Routes>
    </div>
    </>
  )
}

export default App
