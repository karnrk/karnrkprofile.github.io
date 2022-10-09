import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Newlayout() {
  return (
    <>
     <header id="header">
        <Link to="/home" className="logo">
            <strong  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">Rahul</strong> <strong data-aos-easing="linear" data-aos-duration="600" data-aos="fade-down">Kumar</strong>
        </Link>
        <ul className="icons">
            <li className="heartBeat">
                <a href="https://github.com/karnrk/profile" target="_blank" className="icon brands fa-github ">
                    <span className="label">Github</span>
                </a>
            </li>
            <li className="heartBeat">
                <a href="https://www.linkedin.com/in/karnrk5/" target="_blank" className="icon brands fa-linkedin-in">
                    <span className="label">linkedin</span>
                </a>
            </li>
        </ul>
    </header>
    <Navigation />
    <Outlet />  
    </>
  )
}