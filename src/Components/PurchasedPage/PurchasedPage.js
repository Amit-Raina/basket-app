import { Component, Fragment } from "react";
import "./PurchasedPage.css";

import Header from "../../Reusable_Components/Header/Header";
import Footer from "../../Reusable_Components/Footer/Footer";
import FilterBox from "../../Reusable_Components/FilterBox/FilterBox";
import {
  ListitemRemove,
} from "../../Reusable_Components/Listitem/Listitem";

import { connect } from "react-redux";
import {
  filterData,
  emptyBasket,
  addElement,
  checkElement,
} from "../../actions/index";

class PurchasedPage extends Component {
  emptyBasket = () => {
    this.props.emptyBasket();
  };

  addListElement = (value) => {
    this.props.addElement(value);
  };

  checkListElement = (value) => {
    this.props.checkElement(value);
  };

  getFilterValue = (data) => {
    this.props.filterData(data);
  };

  render() {
    return (
      <Fragment>
        <div className="main-screen">
          <Header />
          <FilterBox
            getValue={(event) => {
              this.getFilterValue(event.target.value);
            }}
          />
          <div className="list-container">
            <div className="groceries-list">
              <h3>
                {" "}
                <i className="fa fa-leaf"></i> Groceries
              </h3>
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

              {this.props.basketData.checked.length ? (
                this.props.basketData.checked.map((data, index) => {
                  return (
                    <ListitemRemove
                      key={index}
                      Clicked={() => this.checkListElement(data)}
                      checked={this.props.basketData.checked.includes(data)}
                    >{`${this.props.basketData.Cart_list[data]} ${data}`}</ListitemRemove>
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
const mapStateToProps = (state) => {
  return {
    basketData: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterData: (keyword) => {
      dispatch(filterData(keyword));
    },
    emptyBasket: () => {
      dispatch(emptyBasket());
    },
    addElement: (item) => {
      dispatch(addElement(item));
    },
    checkElement: (item) => {
      dispatch(checkElement(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedPage);
