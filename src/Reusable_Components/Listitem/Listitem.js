import { Fragment } from "react";
import "./Listitem.css";

const Listitem = (props) => {
  return (
    <Fragment>
      <li className="list-item" style={props.style}>
        {props.children}
      </li>
    </Fragment>
  );
};

export default Listitem;
