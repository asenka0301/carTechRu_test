/* eslint-disable default-param-last */
const initialState = {
  loading: false,
  auctions_content: [],
  error: null,
};

const auctions = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUCTIONS_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_AUCTIONS_SUCCESS': {
      return {
        ...state,
        loading: false,
        auctions_content: action.payload,
        error: null,
      };
    }
    case 'FETCH_AUCTIONS_FAILURE': {
      return {
        ...state,
        loading: false,
        auctions_content: [],
        error: action.error,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auctions;
