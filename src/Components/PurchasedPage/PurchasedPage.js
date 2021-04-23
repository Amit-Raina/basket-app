import { Component, Fragment } from "react";
import "./PurchasedPage.css";

import Header from "../../Reusable_Components/Header/Header";
import Footer from "../../Reusable_Components/Footer/Footer";

class PurchasedPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-screen">
          <Header />
          <h1>Purchased Screen</h1>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}
export default PurchasedPage;
