import React from 'react';
import Project1 from '../images/Project1.png';
import Project2 from '../images/Project2.png';
import Project3 from '../images/Project3.png';


export default function Projects() {
  return (
    <>
        <div id="main">
            <div className="inner">
                <section className="projects-wrapper section-class py-5" id="projects">
                    <div className="container">
                        <header className="major text-center " data-aos="zoom-in-left">
                            <h2 className="p-0 text-white">Projects</h2>
                        </header>
                        <header className="major" data-aos="zoom-in-right">
                            <h3 className="text-white">Project on HTML5, CSS3, JavaScript</h3>
                        </header>
                        <div className="row">
                            <div className="card text-white col-lg-6 col-sm-12" data-aos="zoom-in">
                                <a href="" target="_blank">
                                    <img className="card-img" src={Project1} alt="scroll-on-heading"/>
                                    <div className="card-img-overlay">
                                    <h5 className="card-title">Scroll Page( On headings click )</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card text-white col-lg-6 col-sm-12" data-aos="zoom-in">
                                <a href="" target="_blank">
                                    <img className="card-img" src={Project2} alt="Tabber"/>
                                    <div className="card-img-overlay">
                                    <h5 className="card-title">Tabber</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card text-white col-lg-12 col-sm-12" data-aos="zoom-in">
                                <a href="" target="_blank">
                                    <img className="card-img" src={Project3} alt="Accodion"/>
                                    <div className="card-img-overlay">
                                    <h5 className="card-title">Accodion</h5>
                                    </div>    
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}
