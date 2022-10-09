import React from 'react';
import { Link } from "react-router-dom";
import profilepic from '../images/profilepic.jpg';

export default function Banner() {
  return (
    <>
    <div id="main" >
        <div className="inner">
            <section id="banner" className="banner-area">
                <div className="content">
                    <span className="image object" data-aos="zoom-in">
                        <img src={profilepic} alt="Rahul kumar"/>
                    </span>
                    <header>
                        <h1 data-aos="zoom-in-down" data-wow-delay="0.30s">Rahul kumar</h1>
                        <p data-aos="zoom-in-down">Web developer | Hubspot developer | Frontend developer</p>
                    </header>
                    <ul className="actions">
                        <li>
                            <Link to="/aboutme"data-aos="zoom-in-down" className="button big">
                                <span>Learn More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                                    <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}
