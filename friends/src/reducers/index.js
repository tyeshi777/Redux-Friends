import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/login";
import {
  FETCH_FRIEND_START,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  error: "",
  loggingIn: false,
  fetchingFriends: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case FETCH_FRIEND_START:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingFriends: true
      };
    case FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
    default:
      return state;
  }
};

export default reducer;
