import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchAuctions from '../../actions';
import Search from '../Search';
import AuctionsContainer from '../AuctionsContainer';
import Line from '../Divider';
import Loader from '../Loader';

function Main() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auctions.loading);

  useEffect(() => {
    dispatch(fetchAuctions(''));
  }, [dispatch]);

  return (
    <>
      <Search />
      <Line />
      {loading ? <Loader /> : <AuctionsContainer />}
    </>
  );
}

export default Main;
