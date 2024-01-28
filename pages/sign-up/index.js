import React, { useState } from 'react';
import Link from 'next/link'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

const signInBanner = [
  {
    image: '/images/logo2.jpg',
  },
]

function signUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="sign-in-page2">
      {signInBanner.map ((banner) => (
        <Link href="/" className="sign-in-img-div2">
          <img src={banner.image} alt="sign-in-banner" className="sign-in-banner" />
        </Link>
      ))}
      <div className="sign-in-div2">
        <div className="form-top-div">
          <h1 className="form-top-div-header">Sign Up</h1>
          <p className="form-top-div-para">Enter your credentials to register</p>
          <div className="social-links">
            <a href="#" className="google-link"><img src="/images/google.png" alt="login" className="google-img"/></a>
            <a href="#" className="facebook-link"><FacebookTwoToneIcon style={{ color: '#3b5998', background: 'inherit', fontSize: '32px', borderRadius: '50px' }} /></a>
          </div>
        </div>
        <form className="sign-in-form">
          <label className="sign-in-label">Full name</label>
          <input 
            className="sign-in-input"
            placeholder='Name'
            type="text"
          />
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
          <div class="agreement-container">
            <input type="checkbox" id="agreeCheckbox" class="agree-checkbox" />
            <label for="agreeCheckbox" class="agree-label">I agree to the terms and conditions</label>
          </div>
          <button className="sign-in-btn">SIGN UP</button>
          {/* <div className="social-links">
            <a href="#" className="google-link">Google <img src="/images/google.png" alt="login" className="google-img"/></a>
            <a href="#" className="facebook-link">Facebook <FacebookTwoToneIcon style={{ color: 'white', background: 'none', fontSize: '30px' }} /></a>
          </div> */}
          <p className="signup-text">Already have an account? <a href="/sign-in" class="signup-link">Sign in</a></p>
        </form>
      </div>
    </div>
  )
}

export default signUp