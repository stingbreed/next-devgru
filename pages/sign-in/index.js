import React, { useState } from 'react';
import Link from 'next/link'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

const signInBanner = [
  {
    image: '/images/logo2.jpg',
  },
]

function signIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="sign-in-page">
      {signInBanner.map ((banner) => (
        <Link href="/" className="sign-in-img-div">
          <img src={banner.image} alt="sign-in-banner" className="sign-in-banner" />
        </Link>
      ))}
      <div className="sign-in-div">
        <div className="form-top-div">
          <h1 className="form-top-div-header">Sign In</h1>
          <p className="form-top-div-para">Please input your credentials</p>
        </div>
        <form className="sign-in-form">
          <label className="sign-in-label">Email</label>
          <input 
            className="sign-in-input"
            placeholder='example@email.com'
            type="email"
          />
          <label className="sign-in-label">Password</label>
          <div className="password-container">
            <input 
              className="sign-in-input"
              placeholder='**********'
              type={passwordVisible ? 'text' : 'password'}
              id="passwordInput"
            />
            <button 
              type="button" 
              id="togglePasswordBtn" 
              className="toggle-password-btn" 
              onClick={togglePasswordVisibility}
            >
             {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <button className="sign-in-btn" type="submit">SIGN IN</button>
          <div className="social-links">
            <a href="#" className="google-link">Google <img src="/images/google.png" alt="login" className="google-img"/></a>
            <a href="#" className="facebook-link">Facebook <FacebookTwoToneIcon style={{ color: 'white', background: 'none', fontSize: '30px' }} /></a>
          </div>
          <p className="signup-text">Don't have an account? <a href="/sign-up" class="signup-link">Sign up</a></p>
          <p className="signup-text">Forgot your password? <a href="/change-password" class="signup-link">Reset password</a></p>
        </form>
      </div>
    </div>
  )
}

export default signIn