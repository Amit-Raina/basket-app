import { Component, Fragment } from "react";
import "./PendingPage.css";

import Header from "../../Reusable_Components/Header/Header";
import Footer from "../../Reusable_Components/Footer/Footer";

class PendingPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-screen">
          <Header />
          <h1>Pending</h1>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}
export default PendingPage;
