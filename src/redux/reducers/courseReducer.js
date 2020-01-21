import { CREATE_COURSE } from "../types/courseTypes";

const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
}
