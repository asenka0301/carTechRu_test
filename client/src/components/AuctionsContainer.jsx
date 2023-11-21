import { Box } from '@mui/material';
import { useGetAuctionsQuery } from '../api/apiSlice';
import useAuctions from '../hooks';

import Loader from './Loader';
import Auctions from './Auctions';

function AuctionsContainer() {
  const { auctions } = useAuctions();

  const {
    isLoading,
    isSuccess,
    isError,
  } = useGetAuctionsQuery(auctions);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = <Auctions />;
  } else if (isError) {
    content = <div>Error</div>;
  }

  return (
    <Box>{content}</Box>
  );
}

export default AuctionsContainer;
