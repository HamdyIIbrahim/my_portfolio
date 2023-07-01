import React from "react";
import Info from "../../components/info";
import Stats from "../../components/Stats";
import {FaDownload} from "react-icons/fa";
import CV from "../../assets/HamdyIbrahim_Fullstackwebdeveloper.pdf";
import './about.css';
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>
        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">
              Personal Info
            </h3>
            <ul className="info_list grid">
              <Info />
            </ul>
            <a href={CV} download='' className="button">Download My Resume <span className="button_icon"><FaDownload /></span></a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
