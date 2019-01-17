import initialState from './InitialState';
import ActionTypes from '../actions/ActionsType'

export default function checkoutReducer(state = initialState, action) { // {type: , payload}
	switch (action.type) {
		case ActionTypes.applyPromo: { 
			return calculatePromoCode(state);
		}
		case ActionTypes.removePromo: {
			return removePromoCode(state);
		}
		default:
			return state;
	}
}


function calculatePromoCode(state) {
    const subtotal = state.subtotal - (state.subtotal * (state.discount/100));
    return {
        ...state,
        subtotal
    }
}

function removePromoCode(state) {
	const subtotal = state.subtotal + (state.subtotal * (state.discount/100));
	return {
		...state,
		subtotal
	}
}

