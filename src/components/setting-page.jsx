import React from "react";
// import Aside from './aside-section';
import { AiFillSetting } from "react-icons/ai";
import img from "./IMG_20220625_222903_879.jpg";

const SettingPage = () => {
  return (
    <>
      <div className="setting-page">
        <h1>
          <i>{<AiFillSetting />}</i>
          Settings
          <span className="line"></span>
        </h1>
        <div className="change-photo">
          <div>
            <img src={img} alt="current-phot" />
            <div className="text">
              <h2>Upload a New Photo</h2>
              <span>Profile-pic.jpg</span>
            </div>
          </div>
          <a className="button" href="##">
            Update
          </a>
        </div>
        <div className="change-user-info">
          <h2>Change User Information</h2>
          <form>
            <div className="name-email">
              <label htmlFor="name">
                <span>Full Name*</span>
                <input id="name" type="text" placeholder="Mohammad Zayed"/>
              </label>
              <label htmlFor="email">
                <span>Email Address*</span>
                <input id="email" type="email" placeholder="moh@hotmail.com" />
              </label>
            </div>
            <div className="address">
                <label htmlFor="address">
                    <span>Address*</span>
                    <input type="text" placeholder="30 st , Rusaifa , Zarqa" />
                </label>
            </div>
            <div className="phone-number">
                <label htmlFor="phone-number">
                    <span>Phone Number*</span>
                    <input type="text" placeholder="0786856766" />
                </label>
            </div>
            <div className="password">
                <label htmlFor="password">
                    <span>Password*</span>
                    <input type="password" value="0788123026hjhjhhjhj"/>
                </label>
            </div>
            <div className="submit">
                <input type="submit" value="Confirm"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
