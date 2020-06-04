import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';
import ShopReducer from './shop/shop.reducer';

const AppReducers = combineReducers({
    userReducer: UserReducer,
    cartReducer: CartReducer,
    directoryReducer: DirectoryReducer,
    shopReducer: ShopReducer
});

export default (state, action) => AppReducers(state, action); 