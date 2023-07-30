/* eslint-disable arrow-body-style */
import axios from 'axios';
import * as types from '../constants/actions';

export const fetchAuctions = (param) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_AUCTIONS_REQUEST });

    axios.get(`${process.env.CONFIG.API_BASEPATH}/filterAuctions`, { params: { search: param } })
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

export const fetchAuction = (param) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_AUCTION_REQUEST });

    axios.get(`${process.env.CONFIG.API_BASEPATH}/auction/:${param} }`)
      .then((response) => {
        dispatch({
          type: types.FETCH_AUCTION_SUCCESS,
          payload: response.data.auction,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_AUCTION_FAILURE,
          error: error.message,
        });
      });
  };
};
