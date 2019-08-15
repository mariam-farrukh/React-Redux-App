import axios from 'axios';

export const FETCH_LAUNCH_DATA_START = 'FETCH_LAUNCH_DATA_START';
export const FETCH_LAUNCH_DATA_SUCCESS = 'FETCH_LAUNCH_DATA_SUCCESS';
export const FETCH_LAUNCH_DATA_FAILURE = 'FETCH_LAUNCH_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_LAUNCH_DATA_START });
    axios
      .get('https://api.spacexdata.com/v3/launches/upcoming')
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_LAUNCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_LAUNCH_DATA_FAILURE, payload: err.data });
      });
  };
};

export const FETCH_PAST_LAUNCH_DATA_START = 'FETCH_PAST_LAUNCH_DATA_START';
export const FETCH_PAST_LAUNCH_DATA_SUCCESS = 'FETCH_PAST_LAUNCH_DATA_SUCCESS';
export const FETCH_PAST_LAUNCH_DATA_FAILURE = 'FETCH_PAST_LAUNCH_DATA_FAILURE';

export const getPastData = () => {
  return dispatch => {
    dispatch({ type: FETCH_PAST_LAUNCH_DATA_START });
    axios
      .get('https://api.spacexdata.com/v3/launches/past?launch_year=2019')
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_PAST_LAUNCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_PAST_LAUNCH_DATA_FAILURE, payload: err.data });
      });
  };
};