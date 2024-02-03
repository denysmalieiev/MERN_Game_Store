import {Formik,Form,Field,ErrorMessage} from "formik"
import {useState,useEffect} from "react"   
import {useAuth} from "../context/authContext" 
import {useNavigate,Link} from "react-router-dom"

type User =  {
  email:string,
  password:string,
  name:string
}

type InitialV = {
  email:string,
  password:string,
} 

const REQUIRED = "This field is required"

const initialValues:InitialV = {
  email:"",
  password:""
}


const  SignInPage = ()=>{ 
  const navigate =useNavigate()
  const [user,setUser]= useState<User>({}as User)
const auth = useAuth()

 useEffect(()=>{
   const localUser = localStorage.getItem("account") 
   if(localUser){
     const validUser = JSON.parse(localUser)
     setUser(validUser)
   }
 },[]) 
 
 const login = (userEl:InitialV)=>{
   if(userEl.email===user.email&&userEl.password){ 
     auth.login()
     navigate("/")
   }else{
     alert("invalid user")
   }
 }
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100"> 
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-light text-center mb-6 text-purple-700">Welcome to Game Store</h2>  
        <Formik 
        initialValues={initialValues} 
        validate={(values:InitialV)=>{
          const errors = {} as InitialV 
          if (!values.email) {
          errors.email = REQUIRED;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        } 
        if(!values. password){
          errors.password= REQUIRED
        }else if(values.password.length<5){
          errors.password="Password must have at least 6 characters"
        }  
        return errors
        }} 
        onSubmit={(values,{setSubmitting})=>{ 
        login(values)
          setTimeout(()=>{
            setSubmitting(false)
login(values)
          },400)
        }}
        >
        {
          ({isSubmitting})=>(
          <Form className="space-y-3"> 
           <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">
              Email Address
            </label> 
            <Field type="text" name="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="your.email@example.com" /> 
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-bold"/> 
              
           <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">
              Password
            </label> 
            <Field type="text" name="password" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="******" /> 
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm font-bold"/> 
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-700 text-white w-full py-2 rounded hover:bg-purple-800 focus:outline-none"
          >
            Sign In
          </button>
          </Form>
          )
        }
        </Formik> 
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
    </>
    )
}



export default SignInPage;
