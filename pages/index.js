import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Featured from './components/featured'
import FeaturedComments from './components/featuredComments'
import Feedback from './components/feedback'
import Footer from './components/footer'
import Introduction from './components/introduction'
import FacultySection from './components/facultySection'

function HomePage() {
  return (
    <>
      <div className="navbar-div">
        <Navbar />
      </div>
      <div className="bottom-navbar-div">
            <p className="bottom-navbar-para">The&nbsp;
              <span style={{ color : 'red' }}>D</span>
              <span style={{ color : 'orange' }}>E</span>
              <span style={{ color : 'green' }}>V</span>
              <span style={{ color : 'blue' }}>G</span>
              <span style={{ color : 'yellow' }}>R</span>
              <span style={{ color : 'purple' }}>U</span>&nbsp;Advantage Community
            </p>
        </div>
      <div className="banner-div">
        <Banner />
      </div>
      <div className="introduction-div">
        <Introduction />
      </div>
      <div className="featured-div">
        <Featured />
      </div>
      <div className="featured-comment-div">
        <FeaturedComments />
      </div>
      <div className="faculty-section-div">
        <FacultySection />
      </div>
      <div className="feedback-div">
        <Feedback />
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </>
  )
}

export default HomePage