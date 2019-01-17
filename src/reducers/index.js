import {combineReducers} from "redux";

import checkoutReducer from "./CheckoutReducer"
// import userReducer from "./userReducer";

const rootReducer  = combineReducers({checkoutReducer});

export default rootReducer;

