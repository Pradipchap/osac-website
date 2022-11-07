import React from "react";
import logo from "../osac.png";

export default function Navb() {
  return (
    <div className="navbar">
      <div >
        <img src={logo} alt="ad" className="logo"/>
      </div>
      <div className="navHome">Home</div>
      <div className="navEvents">Events</div>
      <div className="navNews">News & Notices</div>
      <div className="navMember">Want to be a member?</div>
      <div className="navSearch">Search</div>
      <div className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></div>
     
    </div>
  );
}
