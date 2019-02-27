import {
  SET_USER_ACTION,
} from './actions';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ACTION:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
