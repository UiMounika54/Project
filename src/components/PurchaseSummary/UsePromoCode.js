import React from "react";

const usePromoCode = props => {
  return (
    <div id="PromoCode">
      <div className="card">
        <div className="card-header">
          <CustomButton click={props.click} nameBtn={props.btnName} />
        </div>
        <div id="promoInput" className="collapse">
          <div className="card-body">
            <form className="form-inline">
              <div className="form-group mb-2">
                <label htmlFor="promoCode">Promo Code</label>
                <input type="text" className="form-control" id="promoCode" name="promoCode" onChange={props.change} />
              </div>
              <button name="apply" className="btn btn-secondary" type="button" onClick={props.onClickApply} value>
                Apply
              </button>
            </form>
            <small>**Note: Only promo with name "DISCOUNT" is enabled</small>
          </div>
        </div>
      </div>
    </div>
  );
};
const CustomButton = props => {
  return (
    <button
      className="btn btn-link collapsed"
      data-toggle="collapse"
      data-target="#promoInput"
      aria-expanded="true"
      onClick={props.click}
    >
      {props.nameBtn} <i className="fal fa-plus" />
    </button>
  );
};

export default usePromoCode;
