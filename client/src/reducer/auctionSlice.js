import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  auctions: [],
};

export const auctionsSlice = createSlice({
  name: 'auctions',
  initialState,
  reducers: {
    addAuctions: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.auctions = payload;
    },
    updateAuctions: (state, { payload }) => {
      const time = new Date().getTime();
      const updatedAuctions = payload.map((auction) => {
        const previousData = (current(state).auctions).find((item) => item.id === auction.id);
        if (auction.finishTime < time) {
          return previousData;
        }
        return auction;
      });
      // eslint-disable-next-line no-param-reassign
      state.auctions = updatedAuctions;
    },
  },
});

export const { updateAuctions, addAuctions } = auctionsSlice.actions;

export default auctionsSlice.reducer;
