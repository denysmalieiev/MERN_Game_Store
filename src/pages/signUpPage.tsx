import {Formik,Form,Field,ErrorMessage} from "formik" 
import {Link,useNavigate} from "react-router-dom"


export type InitialV = {
  email:string,
  password:string,
  name:string
}

const REQUIRED = "This field is required"

const initialValues:InitialV = {
  email:"",
  password:"",
  name:""
}


const SignUpPage = ()=>{
  
  const navigate = useNavigate()
  
  return(
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-700">Join Game Store</h2>  
        
        <Formik 
        initialValues={initialValues}
        validate={(values:InitialV)=>{
          const errors:InitialV = {} as InitialV 
          if(!values.name){
            errors.name = REQUIRED
          } 
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
          localStorage.setItem("account",JSON.stringify(values))
          setTimeout(()=>{
setSubmitting(false); 
          navigate("/user/signin",{replace:true})
          },400)
        }}
        > 
        {({isSubmitting})=>(
        <Form className="space-y-3">  
        <div className="block text-sm font-semibold mb-2 text-gray-800">
              Email
            </div>
        <Field type="text" name="email" placeholder="Enter your email address..." className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"/> 
        <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-bold"/> 
        
        <div className="block text-sm font-semibold mb-2 text-gray-800">
              Full name
            </div>
        <Field type="text" name="name" placeholder="Enter your full name..." className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"/>
        <ErrorMessage name="name" component="div" className="text-red-500 text-sm font-bold"/>  
        
        <div className="block text-sm font-semibold mb-2 text-gray-800">
              Password
            </div>
        <Field type="text" name="password" placeholder="Enter your password..." className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"/> 
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm font-bold"/> 
        
          <button
            type="submit"
            disabled={isSubmitting}            className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800 focus:outline-none"
          >
            Sign Up
          </button>
        </Form>)}
        </Formik>
        
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{' '}
            <Link to="/user/signin" className="text-purple-700 font-semibold">
              Sign in here
            </Link>
          </p>
        </div>
        </div>
        </div>
    </>
    )
}

export default SignUpPage;
