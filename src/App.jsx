import "aos/dist/aos.css";
import "./App.css";

import React, { useEffect } from "react";

import AOS from "aos";
import About from "./partials/About.jsx";
import Card from "./partials/Card.jsx";
import Footer from "./partials/Footer.jsx";
import Projects from "./partials/Projects.jsx";
import Skills from "./partials/Skills.jsx";
import data from "./assets/data";

const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 ">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer github={data.social.github} />
      </div>
    </div>
  );
}
export default App;
