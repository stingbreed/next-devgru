import React from 'react'
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { categories } from './navbar'

const footerImage = [
    {
        image: '/images/logo2.jpg'
    }
]

function footer() {

    console.log(categories)
  return (
    <div className="footer-container">
        <div className="footer-container-divs">
            <div className="footer-links-div2">
                {footerImage.map ((foot) => (<img src={foot.image} alt="" className="footer-logo" />))}
                <div className="footer-socials-div">
                    <Link href="https://m.facebook.com/groups/6121561707898253/?ref=sharehttps://m.facebook.com/groups/6121561707898253/?ref%3Dshare&exp=9594&mibextid=S66gvF"
                          className="footer-socials"
                    >
                        <FacebookIcon style={{ color: '#3b5998', fontSize: '30px', background: 'none' }} />
                    </Link>
                    <Link href="" className="footer-socials">
                        <InstagramIcon style={{ color: 'orange', fontSize: '30px', background: 'none' }} />
                    </Link>
                    <Link href="" className="footer-socials">
                        <TwitterIcon style={{ color: '#1DA1F2', fontSize: '30px', background: 'none' }} />
                    </Link>
                    <Link href="https://www.linkedin.com/groups/9357844" className="footer-socials">
                        <LinkedInIcon style={{ color: '#0077B5', fontSize: '30px', background: 'none' }} />
                    </Link>
                    <Link href="https://youtube.com/@theDEVGRUAdvantage" className="footer-socials">
                        <YouTubeIcon style={{ color: 'red', fontSize: '30px', background: 'none' }} />
                    </Link>
                </div>
            </div>
            <div className="footer-links-div">
                <h2 className="legal-header">Support</h2>
                <Link href="/contact" className="legal-links">Contact us</Link>
                <Link href="/FAQ" className="legal-links">FAQs</Link>
                <Link href="/help" className="legal-links">Help center</Link>
            </div>
            <div className="footer-links-div">
                <h2 className="legal-header">Links</h2>
                <Link href="/faculty" className="legal-links">Faculty</Link>
                <Link href="/training" className="legal-links">Training</Link>
                <Link href="/jobs" className="legal-links">Jobs</Link>
                <Link href="/about" className="legal-links">About</Link>
            </div>
            <div className="footer-links-div">
                <h2 className="legal-header">Legal</h2>
                <Link href="/terms" className="legal-links">Terns and conditions</Link>
                <Link href="/privacy" className="legal-links">Privacy policy</Link>
            </div>
            <div className="footer-links-div">
                <h2 className="legal-header">Subscribe to our newsletter</h2>
                <p className="legal-para">
                    Access exclusive subscriber deals and be the 
                    first to receive updates on new sales and updates.
                </p>
                <form className="footer-subscribe-form">
                    <label className="footer-label">Your Email</label>
                    <input 
                        className="footer-input"
                        placeholder='example@email.com'
                        type="email"
                    />
                    <span className="footer-span">By submitting, I agree to the <Link href="/terms" className="legal-links">Terns and conditions</Link></span>
                    <button className="footer-subscribe-btn">Join</button>
                </form>
            </div>
        </div>
        <div className="footer-foot">
            <p className="footer-foot-para">All rights reserved &copy; {new Date().getFullYear()} The DEVGRU Advantage.</p>
        </div>
    </div>
  )
}

export default footer