import { Component, Fragment } from "react";
import "./OrderListPage.css";

import Header from "../../Reusable_Components/Header/Header";
import Footer from "../../Reusable_Components/Footer/Footer";
import Listitem from "../../Reusable_Components/Listitem/Listitem";

class OrderListPage extends Component {
  state = {
    groceries_list: [
      "Strawberry",
      "Blueberry",
      "Orange",
      "Banana",
      "Apple",
      "Carrot",
      "Celery",
      "Mushroom",
      "Green Pepper",
      "Eggs",
      "Cheese",
      "Butter",
      "Chicken",
      "Beef",
      "Pork",
      "Fish",
      "Rice",
      "Pasta",
      "Bread",
    ],
    Cart_list: ["Strawberry", "Carrot", "Eggs", "Chicken", "Rice"],
  };
  render() {
    return (
      <Fragment>
        <div className="main-screen">
          <Header />
          <div className="filter-div-box">
            <input type="text" placeholder="filter for e.g. Apple"></input>
          </div>
          <div className="list-container">
            <div className="groceries-list">
              <h3>
                {" "}
                <i className="fa fa-leaf"></i> Groceries
              </h3>
              {this.state.groceries_list.map((data, index) => {
                return (
                  <Listitem key={index}>{data}</Listitem>
                );
              })}
            </div>
            <div className="basket-list">
              <h3>
                {" "}
                <i className="fa fa-shopping-basket"></i> Basket 
                <i className="fa fa-trash basket-remove"></i>
              </h3>
              
              {this.state.Cart_list.map((data, index) => {
                return (
                  <Listitem key={index}>{data}</Listitem>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
export default OrderListPage;
