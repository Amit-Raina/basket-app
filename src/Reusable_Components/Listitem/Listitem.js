import { Fragment } from "react";
import "./Listitem.css";

export const ListitemAdd = (props) => {
  return (
    <Fragment>
      <li
        className="list-item list-itemAdd"
        style={props.style}
        onClick={props.Clicked}
      >
        {props.children}
      </li>
    </Fragment>
  );
};

export const ListitemRemove = (props) => {
  return (
    <Fragment>
      <li
        className="list-item list-itemRemove"
        style={{ ...props.style , textDecoration: props.checked ? "line-through": "" }}
        onClick={props.Clicked}

      >
        {props.children}
      </li>
    </Fragment>
  );
};
