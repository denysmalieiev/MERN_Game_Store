import {Routes, Route} from "react-router-dom" 
import Homepage from "./pages/homepage"
import CartPage from "./pages/cartPage"
import Category_page from "./pages/categoryPage" 
import DetailsPage from "./pages/detailsPage" 
import SignInPage from "./pages/signInPage"
import SignUpPage from "./pages/signUpPage"
import CheckoutForm from "./pages/checkOutPage"

function App() {

  return (
    <>
    <div className="h-[100%] bg-blue-100">
    <Routes> 
    <Route path="/" element={<Homepage/>}/>
    <Route path="/cart" element={<CartPage/>}/> 
<Route path="/category/:category" element={<Category_page/>}/>
<Route path="/user/signin" element={<SignInPage/>}/> 
<Route path="/signup" element={<SignUpPage/>}/> 
<Route path="/payments/checkout" element={<CheckoutForm/>}/>
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
