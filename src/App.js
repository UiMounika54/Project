import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store"
import CheckoutSidebar from "./containers/CheckoutSidebar";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
  render() {
    return (
      <Provider store={store}>
         <div className="container">
            <div className="card">
              <div className="card-body">
                <CheckoutSidebar/>
              </div>
            </div>
          </div>
      </Provider>
    );
  }
}