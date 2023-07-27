import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchAuctions from '../../actions';
import Search from '../Search';
import AuctionsContainer from '../AuctionsContainer';
import Line from '../Divider';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuctions());
  }, [dispatch]);

  return (
    <>
      <Search />
      <Line />
      <AuctionsContainer />
    </>

  );
}

export default Main;
