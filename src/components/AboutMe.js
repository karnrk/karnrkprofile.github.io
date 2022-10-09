import React from 'react'
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
            <section className="about-wrapper section-class" id="about">
                <div className="container">
                    <div className="about-content">
                        <header className="major" data-aos="zoom-in-left">
                            <h2>About Me</h2>
                        </header>
                        <p  data-aos="zoom-in-right">
                            I am a website developer, I have knowledge of HTML5 CSS3 jQuery and JavaScript and also Hubl code 
                            which is used in hubspot. I created many websites with multiple functionalities like sliders, popups, Tabber,accodion etc. 
                        </p>
                        <Link className="button big  " data-aos="zoom-in-left" to="/education"> 
                            Know more
                        </Link>
                    </div>
                </div>
            </section>
    </>
  )
}
