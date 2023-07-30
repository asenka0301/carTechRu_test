/* eslint-disable default-param-last */
const initialState = {
  loading: false,
  auctionInfo: {},
  error: null,
};

const auction = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUCTION_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_AUCTION_SUCCESS': {
      return {
        ...state,
        loading: false,
        auctionInfo: action.payload,
        error: null,
      };
    }
    case 'FETCH_AUCTION_FAILURE': {
      return {
        ...state,
        loading: false,
        auctionInfo: {},
        error: action.error,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auction;
