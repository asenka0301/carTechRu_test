import { combineReducers } from 'redux';
import auctions from './auctions';
import auction from './auction';

export default combineReducers({
  auctions,
  auction,
});
