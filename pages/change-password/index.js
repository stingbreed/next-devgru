import React from 'react'
import Link from 'next/link'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

const signInBanner = [
  {
    image: '/images/logo2.jpg',
  },
]

function changePassword() {
  return (
    <div className="sign-in-page">
      {signInBanner.map ((banner) => (
        <Link href="/" className="sign-in-img-div3">
          <img src={banner.image} alt="sign-in-banner" className="sign-in-banner" />
        </Link>
      ))}
      <div className="sign-in-div">
        <div className="form-top-div">
          <h1 className="form-top-div-header">Reset Password</h1>
          <p className="form-top-div-para">You will receive a link in your e-mail</p>
        </div>
        <form className="sign-in-form">
          <label className="sign-in-label">Email</label>
          <input 
            className="sign-in-input"
            placeholder='example@email.com'
            type="email"
          />
          <button className="sign-in-btn">RESET</button>
        </form>
      </div>
    </div>
  )
}

export default changePassword