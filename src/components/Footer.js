import React from 'react'

export default function Footer() {
  return (
    <>
        <footer id="footer" className="footer-wrapper">
            <div className="container">
                <div className="social-icon">
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
                </div>
                <div className="copyright">
                    <p>Copyright © 2022 - Rahul Kumar.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
