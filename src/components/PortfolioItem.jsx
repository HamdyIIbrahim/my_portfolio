import React, { useState } from "react";
import Close from "../assets/close.svg";
import { Link } from "react-router-dom";
import "../pages/portfolio/portfolio"
const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="cardContainer">
      <div className="portfolio_item">
        <img src={img} alt="" className="portfolio_img" />
        <div className="portfolio_hover" onClick={toggleModal}>
          <h3 className="portfolio_title">{title}</h3>
        </div>
        {modal && (
          <div className="portfolio_modal">
            <div className="portfolio_modal-content">
              <img
                src={Close}
                alt=""
                className="modal_close"
                onClick={toggleModal}
              />
              <h3 className="modal_title">{title}</h3>
              <ul className="modal_list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal_item" key={index}>
                      <span className="item_icon">{icon}</span>
                      <div className="">
                        <span className="item_title">{title}</span>
                        <span className="item_details">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              
              {/* <img src={img} alt="" className="modal_img" /> */}
            </div>
          </div>
        )}
      </div>
      <div className="cardInfo">
        <h1>{title}</h1>
        <p>{details[1].desc}</p>
        <Link to={details[3].desc} className="buttonCard">
          Visit now
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
