import React, { Component, Fragment } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/CheckoutActions";
import Payment from "../components/PurchaseSummary/Payment";
import ViewItemDetails from "../components/PurchaseSummary/ViewItemDetails";
import UsePromoCode from "../components/PurchaseSummary/UsePromoCode";

class CheckoutSidebar extends Component {
  state = {
    promoBtnName: "Apply Promo Code",
    isPromoOpen: false,
    seeItemBtnName: "See Item Details",
    isSeeItemOpen: false,
    purchasePrices: {},
    estimatedTotal: 0,
    promoInput: "",
    toolTipTitle:
      "Picking up your order in the store helps cut costs, and we pass the savings on to you.",
    hidePromoArea: false
  };

  constructor(props) {
    super(props);
    // this.state.purchasePrices = Object.assign({},this.props.data);
  }
  componentDidMount() {
    
    this.findEstTotal();
  }

  findEstTotal = () => {
    let total =
      this.props.data.subtotal +
      this.props.data.savings +
      this.props.data.taxes;
    return total;
  };

  changeBtnName = btn => {
    switch (btn) {
      case "promo":
        this.setState({
          isPromoOpen: !this.state.isPromoOpen
        });
        if (this.state.isPromoOpen) {
          this.setState({
            promoBtnName: "Apply Promo Code"
          });
        } else {
          this.setState({
            promoBtnName: "Hide Promo Code"
          });
        }
        break;
      case "seeItem":
        this.setState({
          isSeeItemOpen: !this.state.isSeeItemOpen
        });
        if (this.state.isSeeItemOpen) {
          this.setState({
            seeItemBtnName: "See Item Details"
          });
        } else {
          this.setState({
            seeItemBtnName: "Hide Item Details"
          });
        }
        break;
      default:
        return null;
    }
  };

  applyCurrentPromo = (event) => {
    let promoCode = event.target.closest("form")[0].value;
    if (promoCode && promoCode === "DISCOUNT") {
      this.props.applyPromo();
      event.target.closest("form")[0].value ="";
      this.setState({
        hidePromoArea: true
      });
    }
  };
  removePromoCode() {
    this.props.removePromo();
    this.setState({
      hidePromoArea : false
    })
  }
  render() {
    return (
      <Fragment>
        <Payment name="Subtotal" amount={"$" + this.props.data.subtotal} />
        <Payment
          name="Pickup Savings"
          toolTipTitle={this.state.toolTipTitle}
          amount={
            this.props.data.savings > 0
              ? "$" + this.props.data.savings
              : "-$" + -this.props.data.savings
          }
          underLineStyle="underline"
          amountTextColor={
            this.props.savings < 0 ? "amountTextColor" : ""
          }
        />
        <Payment name="EST.taxes&fees (Based on 94085)" amount={"$" + this.props.data.taxes} />
        <hr />
        <h4>
          <strong>
            <Payment name="Est.total" amount={"$" + this.findEstTotal()}
            />
          </strong>
        </h4>
        <div className="row">
          <div className="col">
            <ViewItemDetails
              btnName={this.state.seeItemBtnName}
              click={this.changeBtnName.bind(this, "seeItem")}
              underLineStyle="underline"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.hidePromoArea ? (
              <p>
                Promo code applied sucessfully 
                <button className="btn btn-default" onClick={this.removePromoCode.bind(this)}>Remove Promo Code</button>
              </p>
              ) :
              (<UsePromoCode
                btnName={this.state.promoBtnName}
                click={this.changeBtnName.bind(this, "promo")}
                onClickApply={this.applyCurrentPromo}
                underLineStyle="underline"
              />)
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.checkoutReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutSidebar);
