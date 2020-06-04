import ActionTypes from '../ActionTypes'
const { TOGGLE_CART_HIDDEN, ADD_ITEMS, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } = ActionTypes.CART_ACTIONS;

export const toggleCartDropdown = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: ADD_ITEMS,
    payload: item
});

export const clearItemFromCart = (item) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = (item) =>({
    type: REMOVE_ITEM,
    payload: item
})