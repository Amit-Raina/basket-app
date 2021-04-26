import { Component, Fragment } from "react";
import "./OrderListPage.css";

import Header from "../../Reusable_Components/Header/Header";
import Footer from "../../Reusable_Components/Footer/Footer";
import {
  ListitemAdd,
  ListitemRemove,
} from "../../Reusable_Components/Listitem/Listitem";

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
    Cart_list: { Strawberry: 1, Carrot: 1, Eggs: 1, Chicken: 1, Rice: 1 },
    filter_String : ""
  };

  emptyBasket = () => {
    this.setState({
      Cart_list: {},
    });
  };

  addListElement = (value) => {
    const count =
      (this.state.Cart_list[value] ? this.state.Cart_list[value] : 0) + 1;
    this.setState({
      Cart_list: { ...this.state.Cart_list, [value]: count },
    });
  };

  removeListElement = (value) => {
    const count = this.state.Cart_list[value] - 1;
    if (count <= 0) {
      const newCart = this.state.Cart_list;
      delete newCart[value];
      this.setState({
        Cart_list: newCart
      })
    } else {
      this.setState({
        Cart_list: { ...this.state.Cart_list, [value]: count } ,
      });
    }
  };

  getFilterValue = (data) => {
    this.setState({
      filter_String:data
    })
    
  }

  render() {
    
    let filterList = this.state.groceries_list;
    filterList = filterList.filter((data) => {
      return data.toLowerCase().includes(this.state.filter_String.toLowerCase());
    })

    return (
      <Fragment>
        <div className="main-screen">
          <Header />
          <div className="filter-div-box">
            <input type="text" placeholder="filter for e.g. Apple" onChange={(event)=>{this.getFilterValue(event.target.value)}}></input>
          </div>
          <div className="list-container">
            <div className="groceries-list">
              <h3>
                {" "}
                <i className="fa fa-leaf"></i> Groceries
              </h3>
              {filterList.map((data, index) => {
                return (
                  <ListitemAdd
                    key={index}
                    Clicked={() => this.addListElement(data)}
                  >
                    {data}
                  </ListitemAdd>
                );
              })}
            </div>
            <div className="basket-list">
              <h3>
                {" "}
                <i className="fa fa-shopping-basket"></i> Basket
                <i
                  className="fa fa-trash basket-remove"
                  onClick={this.emptyBasket}
                ></i>
              </h3>

              {Object.keys(this.state.Cart_list).length ? (
                Object.keys(this.state.Cart_list).map((data, index) => {
                  return (
                    <ListitemRemove
                      key={index}
                      Clicked={() => this.removeListElement(data)}
                    >{`${this.state.Cart_list[data]} ${data}`}</ListitemRemove>
                  );
                })
              ) : (
                <ListitemRemove>Your basket is empty!</ListitemRemove>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
export default OrderListPage;
