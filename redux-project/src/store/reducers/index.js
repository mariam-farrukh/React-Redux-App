import {
    FETCH_LAUNCH_DATA_START,
    FETCH_LAUNCH_DATA_SUCCESS,
    FETCH_LAUNCH_DATA_FAILURE
  } from '../actions'
  
  const initialState = {
    launches: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LAUNCH_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_LAUNCH_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          launches: action.payload,
          error: ''
        };
      default:
        return state;
    }
  };