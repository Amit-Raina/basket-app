import "./Header.css";
import { Fragment } from "react";

import Basket_logo from "../../assets/basket_logo.png";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <center>
          <div className="basket-logo">
            <img src={Basket_logo} alt="basket-logo.png" />
          </div>
        </center>
      </div>
    </Fragment>
  );
};

export default Header;
