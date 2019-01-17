import React from "react";

const payment = props => {
  return (
    <div className="row">
      {
        props.toolTipTitle ? (
                  <div className={"summaryName col-7 pl-0"}>
                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom"
                      className={"summaryName col-7 " + props.underLineStyle}
                      title={props.toolTipTitle}
                    >
                      {" " + props.name + " "}
                    </a>
                  </div>
                ) : (
                  <div className={"summaryName col-7 " + props.underLineStyle}>
                    {" " + props.name + " "}
                  </div>
                )
      }
      
      <strong className={"summaryAmount col-5 " + props.amountTextColor}>
        <span> {props.amount} </span>
      </strong>
    </div>
  );
};

export default payment;
