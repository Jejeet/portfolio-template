import React from "react";
import logo from "../../Images/Logo.jpg";
import dropdown from "../../Images/En.jpg";
import vector from "../../Images/Vector 14.jpg";
import signIn from "../../Images/SignIn.png";
import "./nav.css";

const nav = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="navlist">
          <ul>
            <li>Home</li>
            <li>Page</li>
            <li>Listings</li>
            <li>Profile</li>
          </ul>
        </div>

        <div className="contact-signIn">
          <div className="nav-drop">
            <img src={dropdown} alt="" />
            <img src={vector} alt="" />
            <img src={signIn} alt="" />
          </div>

          <div>
            <span>Add Listing</span>
            <span class="material-symbols-outlined">
post_add
</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
