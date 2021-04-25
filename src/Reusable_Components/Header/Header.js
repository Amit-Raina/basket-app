import "./Header.css";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <center>
          <div className="basket-logo">
            <i className="fa fa-shopping-basket fa-6 basket-icon"></i>
            <h2>Hello, Basket!</h2>
          </div>
        </center>
      </div>
    </Fragment>
  );
};

export default Header;
