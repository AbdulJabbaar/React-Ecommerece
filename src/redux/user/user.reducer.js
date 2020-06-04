import { ActionTypes } from '../../redux/ActionTypes';
const { USER_ACTIONS } = ActionTypes;

const INITIAL_STATE = {
    currentUser: null
};

const { SET_CURRENT_USER } = USER_ACTIONS;

const UserReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}

export default UserReducer;