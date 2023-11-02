import { useGetAuctionsQuery } from '../../api/apiSlice';
import useAuctions from '../../hooks';

import Search from '../Search';
import Line from '../Divider';
import Loader from '../Loader';
import AuctionsContainer from '../AuctionsContainer';

function Main() {
  const { auctions } = useAuctions();
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetAuctionsQuery(auctions);

  const onSearchChange = (searchData) => {
    refetch(searchData);
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = <AuctionsContainer auctions={data.auctions} />;
  } else if (isError) {
    content = <div>Error</div>;
  }
  return (
    <>
      <Search onSearchChange={onSearchChange} />
      <Line />
      {content}
    </>
  );
}

export default Main;
