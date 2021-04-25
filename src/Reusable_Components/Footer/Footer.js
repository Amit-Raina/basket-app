import "./Footer.css";
import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  state = {
    orderPageCSS: "nav-options underline",
    pendingPageCSS: "nav-options underline",
    purchasedPageCSS: "nav-options underline",
  };

  checkUnderLine = () => {
    if (window.location.href.split("/")[3] === "") {
      this.setState({
        orderPageCSS: "nav-options",
        pendingPageCSS: "nav-options underline",
        purchasedPageCSS: "nav-options underline",
      });
    } else if (window.location.href.split("/")[3] === "pending") {
      this.setState({
        orderPageCSS: "nav-options underline",
        pendingPageCSS: "nav-options ",
        purchasedPageCSS: "nav-options underline",
      });
    } else if (window.location.href.split("/")[3] === "purchased") {
      this.setState({
        orderPageCSS: "nav-options underline",
        pendingPageCSS: "nav-options underline",
        purchasedPageCSS: "nav-options ",
      });
    }
    else{}
  };
  
  componentDidMount = ()=>{
      this.checkUnderLine();
  }

  render() {
      
    return (
        
      <Fragment>
        <div className="footer">
          
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className={this.state.orderPageCSS}>All</p>
            </NavLink>
            <p className="nav-options">,&nbsp;</p>
            <NavLink to="/pending" style={{ textDecoration: "none" }}>
              <p className={this.state.pendingPageCSS}>Pending</p>
            </NavLink>
            <p className="nav-options">,&nbsp;</p>
            <NavLink to="/purchased" style={{ textDecoration: "none" }}>
              <p className={this.state.purchasedPageCSS}>Purchased</p>
            </NavLink>
          
        </div>
      </Fragment>
    );
  }
}

export default Footer;
