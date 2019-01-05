import { LOADED } from "../actions/actionTypes";

const initialState = {
  loaded: false,
  pic: ''
};
export default function loadedReducer(state = initialState, action) {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        loaded: true,
        pic: action.pic
      };
    default:
      return state;
  }
}