export const SET_USER_ACTION = 'set-user-action';

export const createSetUserAction = (user) => ({
  type: SET_USER_ACTION,
  user,
});
