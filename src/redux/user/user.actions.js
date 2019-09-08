import { userActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

// this is a functiont that takes a user and returns an action object
