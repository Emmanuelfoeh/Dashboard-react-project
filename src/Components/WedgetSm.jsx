import { Visibility } from "@material-ui/icons";
import React from "react";

const WedgetSm = () => {
  return (
    <div className="WedgetSm p-3">
      <h1>Newly Joined Members</h1>
      {/* Wedget item */}
      <div className="wedgetsmItem p-1">
        <ul className="wedgetsmList">
          <li className="list  d-flex flex-row align-items-center justify-content-between">
            <img src="images/pic2.jpg" alt="profile pic" />
            <span className="profile">
              <h4>Emmanuel Foeh</h4>
              <p>Software Engineer</p>
            </span>
            <button className="smBtn btn btn-light">
              <Visibility className="me-1" />
              Display
            </button>
          </li>
        </ul>
      </div>
      {/* Wedget item */}
      <div className="wedgetsmItem p-2">
        <ul className="wedgetsmList">
          <li className="list  d-flex flex-row align-items-center justify-content-between">
            <img src="images/pic2.jpg" alt="profile pic" />
            <span className="profile">
              <h4>Emmanuel Foeh</h4>
              <p>Software Engineer</p>
            </span>
            <button className="smBtn btn btn-light">
              <Visibility className="me-1" />
              Display
            </button>
          </li>
        </ul>
      </div>
      {/* Wedget item */}
      <div className="wedgetsmItem p-1">
        <ul className="wedgetsmList">
          <li className="list  d-flex flex-row align-items-center justify-content-between">
            <img src="images/pic2.jpg" alt="profile pic" />
            <span className="profile">
              <h4>Emmanuel Foeh</h4>
              <p>Software Engineer</p>
            </span>
            <button className="smBtn btn btn-light">
              <Visibility className="me-1" />
              Display
            </button>
          </li>
        </ul>
      </div>
      {/* Wedget item */}
      <div className="wedgetsmItem p-1">
        <ul className="wedgetsmList">
          <li className="list  d-flex flex-row align-items-center justify-content-between">
            <img src="images/pic2.jpg" alt="profile pic" />
            <span className="profile">
              <h4>Emmanuel Foeh</h4>
              <p>Software Engineer</p>
            </span>
            <button className="smBtn btn btn-light">
              <Visibility className="me-1" />
              Display
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WedgetSm;
