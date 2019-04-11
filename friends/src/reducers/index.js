import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/login";

const initialState = {
  friends: [],
  error: "",
  loggingIn: false,
  fetchingData: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        fetchingData: false,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "please enter a valid input"
      };
    default:
      return state;
  }
};

export default reducer;
