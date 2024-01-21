import React from 'react'

const facultySectionImage = [
    {
        image: '/images/david.jpg',
        image2: '/images/music.jpg',
    },
]

function facultySection() {
  return (
    <div className="faculty-section-container">
        <div className="faculty-section-container-div">
            <h1 className="faculty-section-header">Become a part of <br></br>our faculty</h1>
            <p className="faculty-section-para">
            vibrant and diverse intellectual community. 
            With a passion for discovery and a drive for innovation, 
            our faculty fosters an environment that encourages critical thinking, 
            creativity, and collaboration.|
            </p>
        </div>
        <div className="faculty-section-div2">
            <div className="faculty-section-img-div">
                {facultySectionImage.map ((fac) => (
                    <div className="faculty-section-img-left-div">
                        <img src={fac.image} alt="" className="faculty-section-img" />
                        <button className="faculty-section-btn">JOIN OUR FACULTY</button>
                    </div>
                ))}
            </div>
            <div className="faculty-section-img-div">
                {facultySectionImage.map ((fac) => (
                    <div className="faculty-section-img-right-div">
                        <img src={fac.image2} alt="" className="faculty-section-img2" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default facultySection