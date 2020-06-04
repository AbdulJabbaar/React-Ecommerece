import { ActionTypes } from '../ActionTypes'
import { addItemToCart, removeItemFromCart } from './cart.utils';

const { TOGGLE_CART_HIDDEN, ADD_ITEMS, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } = ActionTypes.CART_ACTIONS;
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload)
            }
        default:
            return state;
    }
}

export default CartReducer;