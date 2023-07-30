import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { fetchAuction } from '../../actions';
import Loader from '../Loader';

function Auction() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auction.loading);

  useEffect(() => {
    dispatch(fetchAuction(id));
  }, [dispatch, id]);

  return (
    loading
      ? <Loader />
      : (
        <Box>Auction</Box>
      )
  );
}

export default Auction;
