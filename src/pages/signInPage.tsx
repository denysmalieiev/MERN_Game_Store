import {Link,useNavigate} from "react-router-dom"
import {useState} from "react" 
import {useAuth} from "../context/authContext" 

type LogIn = {
  email:string,
  password:string,
}


const SignInPage = () => {  
  const [input,setInput] = useState({email:"",password:"",valid:true});
  const navigate = useNavigate()
  const auth = useAuth()
const loginInfo = localStorage.getItem("account");

  const handleSignIn = () => {
    try{
if(loginInfo){
  const logindata:LogIn = JSON.parse(loginInfo) 
  if(logindata.email===input.email&&logindata.password === input.password){ 
    auth.login()
     navigate("/",{replace:true}) 
  }
}
    
if(input.email===""||input.password===""){setInput({email:input.email,password:input.password,valid:false})
} else{
  setInput({email:input.email,password:input.password,valid:true})
  
}}catch (err){alert(err)}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"> 
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-light text-center mb-6 text-purple-700">Welcome to Game Store</h2> 
    {
      !input.valid&&(<div className="font-bold text-red-600 text-sm  m-4 rounded bg-red-100 bg-opacity-50 p-1">Password or email is wrong !!!</div>)
    }
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email" 
              value={input.email}
              onChange={(e:any)=>setInput({email:e.target.value, password:input. password,valid:input.valid})}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password" 
              value={input.password}
              onChange={(e:any)=>setInput({password:e.target.value, email:input.email,valid:input.valid})}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSignIn}
            className="bg-purple-700 text-white w-full py-2 rounded hover:bg-purple-800 focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            New to Game Store?{' '}
            <Link to="/signup" className="text-purple-700 font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
