import React from "react";

const item = props => {
  return (
    <div className="item">
      <img alt="" src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" />
      <p className="itemName"> {props.name} </p>
      <small className="reducedPrice"> {props.reducedPrice} </small>
      <small className="quantity">Qty: {props.quantity}</small>
      <br />
      <small className="originalPrice"> {props.originalPrice} </small>
    </div>
  );
};

export default item;
