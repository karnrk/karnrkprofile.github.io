import React from 'react';
import fileicon from '../images/PDF_file_icon.jpg';
import ResumePDF from '../PDF/RahulResume.pdf'
import { Link } from "react-router-dom";

export default function Navigation() {

    const handleClick = event => {
        //👇️ toggle class on click
        const sidebar = document.querySelector('#sidebar');  
        const main = document.querySelector('#main');
        sidebar.classList.toggle('inactive');
        document.querySelector('.body-wrapper-inner').classList.toggle('inactive');
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
    };

  return (
    <>
        <div id="sidebar">
            <div className="inner">
                    <nav id="menu">
                        <header className="major">
                            <h2>
                                <Link to="/home">Rahul Kumar</Link>
                            </h2>
                        </header>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutme">About</Link></li>
                            <li><Link to="/education">Education</Link></li>
                            <li><Link to="/experience">Work experience</Link></li>
                            <li><Link to="/project">Projects</Link></li>
                            <li><Link to="/blog">Blogs</Link></li>
                        </ul>
                    </nav> 
                    <section>
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                            <p>Contact Me, If you are interested to know more about me!</p>
                        <ul className="contact">
                            <li>
                                <a href={ResumePDF} target="_blank">
                                    <img src={fileicon} alt="PDF"/>
                                    <span>Resume</span>
                                </a>
                            </li>
                            <li className="icon solid fa-envelope">
                                <a href='mailto:karnrk5@gmail.com'>karnrk5@gmail.com</a>
                            </li>
                            <li className="icon solid fa-phone">
                                <a href='tel:+9205009528'>(+91) 9205009528</a>
                            </li>
                        </ul>
                    </section>
            </div>
            <span className="toggle" onClick={handleClick}>Toggle</span>
        </div>
    </>
  )
}
