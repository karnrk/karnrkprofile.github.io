import React from 'react'
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <>
            <section className="experience-wrapper py-5 section-class" id="experience">
                <div className="container">
                    <header className="major text-center "data-aos="zoom-in-left">
                        <h2 className="p-0">Experience</h2>
                    </header>
                    <div className="experience-content text-center" data-aos="zoom-in-right">
                        <p>
                            I have started my career as Hubspot developer now i am working as web developer.I create many templates, blogs with multiple functionalities.
                            Like filter, sliders, popups, lightbox, lightbox with slider etc. 
                        </p>
                        <Link className="button big"  data-aos="zoom-in-left"  to="/project"> 
                            Projects
                        </Link>
                    </div>
                </div>
            </section>
    </>
  )
}
