import { Component, Fragment } from "react";
import "./OrderListPage.css";

import Header from "../../Reusable_Components/Header/Header";
import Footer from "../../Reusable_Components/Footer/Footer";

class OrderListPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-screen">
          <Header />
          <div className="filter-div-box">
            <input type="text"></input>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
export default OrderListPage;
