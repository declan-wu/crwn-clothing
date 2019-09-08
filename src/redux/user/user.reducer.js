import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
// reducer is a function that takes two property: state object - last state or cur state; and action - type of string value

// action object is just a type and payload

// the reason we wanna default return the state is that every single reducer gets every single action ever gets fired, even if the those actions are not related to the reducer.
