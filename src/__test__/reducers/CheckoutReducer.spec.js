import checkoutReducer from '../../reducers/CheckoutReducer';
import initialState from '../../reducers/InitialState';
import ActionTypes from '../../actions/ActionsType';

describe("App Reducer Testing", () => {
    it('Test Apply promo code function', async () => {
        //expect.assertions(1);
        const {subtotal,discount} = initialState;
        const newTotal = subtotal - (subtotal * (discount/100))
        await expect(checkoutReducer(initialState,{type: ActionTypes.applyPromo}).subtotal).toBe(newTotal);
    });
});