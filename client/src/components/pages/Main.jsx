import { useSelector } from 'react-redux';
import Search from '../Search';
import AuctionsContainer from '../AuctionsContainer';
import Line from '../Divider';
import Loader from '../Loader';

function Main() {
  const loading = useSelector((state) => state.auctions.loading);

  return (
    <>
      <Search />
      <Line />
      {loading ? <Loader /> : <AuctionsContainer />}
    </>
  );
}

export default Main;
