/* eslint-disable arrow-body-style */
import axios from 'axios';
import * as types from '../constants/actions';

const fetchAuctions = () => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_AUCTIONS_REQUEST });

    axios.get(`${process.env.CONFIG.API_BASEPATH}/filterAuctions`, { params: { search: '' } })
      .then((response) => {
        dispatch({
          type: types.FETCH_AUCTIONS_SUCCESS,
          payload: response.data.auctions,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_AUCTIONS_FAILURE,
          error: error.message,
        });
      });
  };
};

export default fetchAuctions;
