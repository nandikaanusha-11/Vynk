import '../signup.css'; 
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Notification from "../components/Notification";
export default function SignUpPage() { 
  const[name,setName]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const [notification, setNotification] = useState({
             message: "",
             type: ""
  });
  const handleSubmit=async(e)=>{
      e.preventDefault();
      
      try{
        const response=await axios.post(
          "http://localhost:8000/api/v1/users/register",
          {
            name,
            username,
            password
          }
        );
      
       navigate("/",{
        state:{
          notification:{
            message:"SignUp successful!",
            type:"success"
          }
        }
       });
     
      }catch(error){
          setNotification({
              message: "Signup failed. Please try again.",
              type: "error"
          });
          console.log(error.response?.data || error.message);
      }
  };

  return (
     <div className="signup"> 
      <Notification
         message={notification.message}
         type={notification.type}
         onClose={()=>setNotification({
          message:"",
          type:""
         })}
      />
     <form className="sign-up-form" onSubmit={handleSubmit}> 
        <h2>Sign Up</h2> 
        <p className="signup-subtitle">Create your account</p> 
       <div className="form-group"> 
         <label htmlFor="name" className="form-ele"> Name </label> 
         <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} /> 
      </div> 
        <div className="form-group"> 
          <label htmlFor="email" className="form-ele"> Username </label> 
          <input type="email" id="email" placeholder="Enter your username" value={username}  onChange={(e)=>setUsername(e.target.value)} /> 
        </div> 
        <div className="form-group"> 
          <label htmlFor="password" className="form-ele"> Password </label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
        </div> 
         <button type="submit" className="signup-btn" > Sign Up </button> 
         <p className="login-text"> Already have an account? <Link to='/login'><span>Login</span> </Link></p> 
         <p className="login-text"> <Link to='/'><span>Go To HomePage</span> </Link></p> 
       </form> 
    </div> ); }