import React from "react";

import Item from "./Item";

const ViewItemDetails = props => {
  return (
    <div id="ViewItemDetails">
      <div className="card">
        <div className="card-header">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#details"
            aria-expanded="true"
            onClick={props.click}
          >
            {props.btnName}
          </button>
        </div>
        <div id="details" className="collapse">
          <div className="card-body">
            <Item
              name="Essentials by OFM ESS-3085 Racing Style Leather"
              reducedPrice="$90"
              originalPrice="$120"
              quantity="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItemDetails;
