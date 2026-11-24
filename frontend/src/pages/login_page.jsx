import '../login.css'; 
import {Link,useNavigate} from 'react-router-dom';
import {useState,useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import Notification from "../components/Notification";
export default function LogInPage() { 
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
    const navigate= useNavigate();
  const {setUser} = useContext(AuthContext);
  const [notification, setNotification] = useState({
               message: "",
               type: ""
       });


  const loginHandler = async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(
         "http://localhost:8000/api/v1/users/login",
         {
          username,
          password
         }
      )
      const token=response.data.token;
      localStorage.setItem("token",token);
      setUser(
        {

          username:username,
          token:token
        }
      );
      navigate("/", {
        state: {
        notification: {
        message: "Login successful!",
        type: "success"
        }
       }
     });
  
      
    }catch(error){
      setNotification({
      message: "Login failed. Please try again.",
      type: "error"
     });
      console.log(error.response?.data || error.message);
    }
  }
  return ( 
    
  <div className="login"> 
      <Notification
          message={notification.message}
          type={notification.type}
          onClose={()=>setNotification({
            message:"",
            type:""
          })}
      />
      <form className="login-form" onSubmit={loginHandler}> 
            <h2>Login</h2> 
            <p className="login-subtitle">Welcome back</p> 
            <div className="form-group"> 
               <label htmlFor="userName" className="form-ele"> Username </label> 
               <input type="username" id="email" placeholder="Enter your username" onChange={(e)=> setUsername(e.target.value)} /> 
            </div> 
            <div className="form-group"> 
              <label htmlFor="password" className="form-ele"> Password </label> 
              <input type="password" id="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/> 
            </div> 
            <button type="submit" className="login-btn"> Login </button> 
            <p className="signup-text"> Don't have an account? <Link to='/signup'><span>Sign Up</span></Link> </p>
            <p className="signup-text"><Link to='/'><span>Go to HomePage</span></Link></p> 
        </form> 
  </div> 
 ); 
}