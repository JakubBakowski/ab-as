import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./../styles/NavBar.css";
import "./../styles/layout.module.css";
const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-container">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus placeat accusantium autem assumenda sunt excepturi ex
                nobis quisquam alias quas facere omnis tenetur, facilis
                laudantium consequatur reiciendis itaque dicta porro.
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon="bars" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
