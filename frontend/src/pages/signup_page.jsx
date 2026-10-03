import '../signup.css'; 
import {Link} from 'react-router-dom';
export default function SignUpPage() { 
  return (
     <div className="signup"> 
     <div className="sign-up-form"> 
        <h2>Sign Up</h2> 
        <p className="signup-subtitle">Create your account</p> 
       <div className="form-group"> 
         <label htmlFor="name" className="form-ele"> Name </label> 
         <input type="text" id="name" placeholder="Enter your name" /> 
      </div> 
        <div className="form-group"> 
          <label htmlFor="email" className="form-ele"> Email </label> 
          <input type="email" id="email" placeholder="Enter your email" /> 
        </div> 
        <div className="form-group"> 
          <label htmlFor="password" className="form-ele"> Password </label>
          <input type="password" id="password" placeholder="Enter your password" /> 
        </div> 
         <button type="submit" className="signup-btn" > Sign Up </button> 
         <p className="login-text"> Already have an account? <Link to='/login'><span>Login</span> </Link></p> 
       </div> 
    </div> ); }