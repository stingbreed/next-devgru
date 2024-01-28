import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Members from './components/members'

function faculty() {
  return (
    <div className="faculty-page">
      <div className="navbar-div">
        <Navbar />
      </div>
      <main className="faculty-container">
        <div className="image-div">
          <img src="/images/sign-up.jpg" alt="faculty-banner" className="faculty-banner" />
        </div>
        <div className="members-div">
          <Members />
        </div>
        <div className="footer-div">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default faculty