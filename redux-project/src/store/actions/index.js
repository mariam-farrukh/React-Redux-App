import axios from 'axios';

export const FETCH_LAUNCH_DATA_START = 'FETCH_LAUNCH_DATA_START';
export const FETCH_LAUNCH_DATA_SUCCESS = 'FETCH_LAUNCH_DATA_SUCCESS';
export const FETCH_LAUNCH_DATA_FAILURE = 'FETCH_LAUNCH_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_LAUNCH_DATA_START });
    axios
      .get('https://api.spacexdata.com/v3/launches/past')
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_LAUNCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_LAUNCH_DATA_FAILURE, payload: err.data });
      });
  };
};