import React, { useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const jobsData = [
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
  {
    position: 'Field Engineer - NextGen Graduate Program',
    sub: 'weatherford Nigeria',
    jobType: 'Full time',
    date: '22/01/24',
  },
]

function jobs() {
  const jobsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(jobsData.length / jobsPerPage);

  return (
    <div className="jobs-page">
      <div className="navbar-div">
        <Navbar />
      </div>
      <div className="jobs-banner-img-div">
        <img src="/images/reset.jpg" alt="Jobs banner" className="jobs-banner" />
        <h1 className="jobs-header">The DEVGRU Jobs Portal</h1>
        <p className="jobs-header-para">Unlock Your Career Potential: Explore Exciting Opportunities on Our Job Portal!.</p>
      </div>
      <main className="jobs-container">
         <div className="jobs-holder">
          <div className="jobs-left">
            {currentJobs.map ((job, index) => (
              <div class="jobs-display-div">
                <h2 class="jobs-display-div-header">{job.position}</h2>
                <p class="jobs-display-div-para">{job.sub}</p>
                <div class="jobs-display-div-div">
                  <button class="jobs-display-div-btn">{job.jobType}</button>
                  <p class="jobs-display-div-para">{job.date}</p>
                </div>
              </div>
            ))}
            <div className="jobs-pagination">
              <button
                onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={currentPage === 1}
              >
                {'<'}
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                {'>'}
              </button>
            </div>
          </div>
         </div>
         <div className="footer-div">
          <Footer />
         </div>
      </main>
    </div>
  )
}

export default jobs