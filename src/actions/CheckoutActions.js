import ActionTypes from './ActionsType'

export function applyPromo() {
	return function(dispatch) {
		return dispatch({
			type: ActionTypes.applyPromo
		});
	}
	
}

export function removePromo() {
	return function(dispatch) {
		return dispatch({
			type: ActionTypes.removePromo
		});
	}
	
}