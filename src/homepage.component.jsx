import React from "react";
import "./homepage.style.scss";

const HomePage = ({ title, subtitle }) => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
