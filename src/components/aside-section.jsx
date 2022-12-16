import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartBar , faGear ,faUser ,faDiagramProject ,  faGraduationCap , faUserGroup , faFile,faCreditCard  } from '@fortawesome/free-solid-svg-icons';
import List from "./list";

import img from "./IMG_20220625_222903_879.jpg";

import { MdLogout } from "react-icons/md";

const Aside = () => {
  return (
    <>
      <aside>
        <section className="info">
          <img src={img} alt="pp" />
          <div className="text">
            <span className="name">Mohammad zayed </span>
            <span className="rate">Rating : 4.5 / 5</span>
          </div>
        </section>
        <section className="links">
          <List />
        </section>
        <section className="logout">
          <a href="#signin page">
            Logout
            <i>
              <MdLogout />
            </i>
          </a>
        </section>
      </aside>
    </>
  );
};

export default Aside;
