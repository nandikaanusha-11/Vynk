import '../login.css'; 
import {Link} from 'react-router-dom';
export default function LogInPage() { 
  return ( 
  <div className="login"> 
      <div className="login-form"> 
            <h2>Login</h2> 
            <p className="login-subtitle">Welcome back</p> 
            <div className="form-group"> 
               <label htmlFor="email" className="form-ele"> Email </label> 
               <input type="email" id="email" placeholder="Enter your email" /> 
            </div> 
            <div className="form-group"> 
              <label htmlFor="password" className="form-ele"> Password </label> 
              <input type="password" id="password" placeholder="Enter your password" /> 
            </div> 
            <button type="submit" className="login-btn"> Login </button> 
            <p className="signup-text"> Don't have an account? <Link to='/signup'><span>Sign Up</span></Link> </p> 
        </div> 
  </div> 
 ); 
}