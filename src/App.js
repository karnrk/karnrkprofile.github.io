import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import BannerImg from './images/Banner_image.jpg';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import NoPage from './components/NoPage';
import Footer from "./components/Footer";
import Newlayout from "./components/Newlayout";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App" id="wrapper" style={{ backgroundImage: `url(${BannerImg})`}}>
      <div className="body-wrapper-inner">
        <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Newlayout />}>
                    <Route index element={<Banner />} />
                    <Route path="home" element={<Banner />} />
                    <Route path="aboutme" element={<AboutMe />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="education" element={<Education />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="project" element={<Projects />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
          </BrowserRouter>
          <Footer />
      </div>
    </div>
  );
}

export default App;
