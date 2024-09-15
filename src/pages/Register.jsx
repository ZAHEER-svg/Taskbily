import { Link } from "react-router-dom";
import '../styles/Register.css'
import {useState} from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const showPassword = ()=>{
        const myPassword = document.getElementById('password').value
        if(myPassword.type === 'password'){
            myPassword.type = 'text'
        }
        else{
            myPassword.type = 'password'
        }
    }
  return (
    <section className="register-card">
      <div className="text-center sm:px-6 md:px-12">
        <img src="" alt="" />
        <h5 className='register-card-header'>
          Check out Taskbily - it's free!
        </h5>
        <p className='register-card-header-subtext'>
          Taskbily helps freelancers, consultants, and small businesses around
          the world simplify their finances.
        </p>
        <form action="">
          <div>
            <input type="email" name="" id="email" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder="Email" />
          </div>
          <div>
            <input type="password" name="" id="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder="Password" />
          </div>
          <div className='form-footer'>
            <p className='form-footer-text'>At least 8 characters, but not longer is better</p>
            <p className='form-footer-show'  onClick={showPassword}>Show</p>
          </div>
          <button className='register-btn'>Get Started</button>
        </form>
        <div>
          <div className='reg-divider'>or</div>
          <div>
            <button  className='register-google-btn'>Sign up with Google</button>
          </div>
          <div className='register-footer'>By signing up, you are indicating that you have read and agree to the <Link className='reg-link'>Terms of use</Link> and <Link>Privacy Policy</Link>.</div>
          <div className='register-footer-text'>Already have an account? <Link className='reg-link'>Sign in now.</Link></div>
        </div>
      </div>
    </section>
  );
};

export default Register;
