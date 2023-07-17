import React from "react";
import Profile from "../../assets/home.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home_img" />
      <div className="home_content glass">
        <div className="home_data ">
          <h1 className="home_title">
            <span>I'm Hamdy Ibrahim.</span> Full Stack Web Developer
          </h1>
          <p className="home_description">
            Experienced Full Stack web developer with a history of working in
            the computer software industry. Passion for developing innovative
            programs that expedite the efficiency and effectiveness of
            organizational success. Well-versed in technology and writing code
            to create systems that are reliable and user-friendly. innovative
            creator to develop software that is customized to meet a company’s
            organizational needs, highlight its core competencies, and further
            its success.
          </p>
          <Link to='/about' className="button"> More About Me <span className="button_icon"><FaArrowRight /></span></Link>
        </div>
      </div>
      {/* <div className="color_block"></div> */}
    </section>
  );
};

export default Home;
