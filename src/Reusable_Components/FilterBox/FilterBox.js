import { Fragment } from "react";

import "./FilterBox.css";

const FilterBox = (props) => {
  return (
    <Fragment>
      <div className="filter-div-box">
        <input
          type="text"
          placeholder="filter for e.g. Apple"
          onChange={props.getValue}
        ></input>
      </div>
    </Fragment>
  );
};
export default FilterBox;
