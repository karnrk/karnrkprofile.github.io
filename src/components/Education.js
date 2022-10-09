import React from 'react'
import IgnouLogo from '../images/ignou-logo.jpg';
import CBSELOGO from '../images/CBSE-LOGO-1.jpg';
import HTMLLOGO from '../images/HTML.png';
import CSSLOGO from '../images/CSS.png';
import JavascriptLOGO from '../images/javascript.jpg';
import HubspotLOGO from '../images/logo-hubspot.png';
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <>
        <section className="education-wrapper " id="education">
            <div className="container">
                <div className="education-content">
                    <header className="major  " data-aos="zoom-out-up">
                        <h2>Education</h2>
                    </header>
                    <div className="features">
                        <article>
                            <div className="img-wrap  " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                <img src={IgnouLogo} alt="ignou" />
                            </div>
                            <div className="content wow fadeInUp" data-aos="fade-up" data-aos-duration="1500">
                                <h3>BCA <br/> (Bachelors's in Computer Application)</h3>
                                <p>The coursework includes Software Learning, deep learning designing, languages, flow charts etc. </p>
                            </div>
                        </article>
                        <article>
                            <div className="img-wrap  " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                <img src={CBSELOGO} alt="cbse" />
                            </div>
                            <div className="content wow fadeInUp" data-aos="fade-up" data-aos-duration="1500">
                                <h3>Class 12th</h3>
                                <p>The coursework includes Account, Maths, Economics,Business Studies, English.</p>
                            </div>
                        </article>
                        <article>
                            <div className="img-wrap" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                <img src={CBSELOGO} alt="cbse" />
                            </div>
                            <div className="content wow fadeInUp" data-aos="fade-up" data-aos-duration="1500">
                                <h3>Class 10th</h3>
                                <p>The coursework includes Physics, Chemistry, Biology, Maths, English, Sanskrit.</p>
                            </div>
                        </article>
                    </div>
                    <div className="btnwrap">
                        <a className="button big" data-aos="zoom-in-left" href="#skill"> 
                            Skills
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="skill-card" id="skill">
                    <header className="major" data-aos="zoom-out-up"> 
                        <h2>Skills</h2>
                    </header>
                    <div className="card-group">
                        <div className="card">
                            <img src={HTMLLOGO} data-aos="zoom-in-up" className="card-img-top" alt="html"/>
                            <div className="card-body">
                            <h5 className="card-title">HTML, HTML5</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img src={CSSLOGO} data-aos="zoom-in-up" className="card-img-top" alt="CSS3"/>
                            <div className="card-body">
                            <h5 className="card-title">CSS, CSS3</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img src={JavascriptLOGO} data-aos="zoom-in-up" className="card-img-top" alt="javascript"/>
                            <div className="card-body">
                                <h5 className="card-title">Javascript</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img src={HubspotLOGO} data-aos="zoom-in-up" className="card-img-top" alt="hubspot"/>
                            <div className="card-body">
                                <h5 className="card-title">Hubspot ( Hubl code )</h5>
                            </div>
                        </div>
                        </div>
                    <div className="btnwrap">
                        <Link className="button big" data-aos="zoom-in-left" to="/experience"> 
                            Work experience
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
