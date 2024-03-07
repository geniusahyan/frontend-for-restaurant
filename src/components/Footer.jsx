import React from 'react'
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn, Tag, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6> 
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <Link className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav> 

        <nav>
          <h6 className="footer-title">Legal</h6> 
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer> 
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <Tag className='' />
          <p>Restaurant Ahyan <br/>Providing food by 2028</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to='https://twitter.com/Aslam_Alam_07' target='_blank' >
              <Twitter />
            </Link>
            <Link to='https://www.linkedin.com/in/aslam-alam-305193286/' target='_blank' >
              <LinkedIn />
            </Link>
            <Link to='https://www.instagram.com/_a._h.ya.n' target='_blank' >
              <Instagram />
            </Link>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer