import ActionTypes from '../ActionTypes';
const { SET_CURRENT_USER } = ActionTypes.USER_ACTIONS;

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});
