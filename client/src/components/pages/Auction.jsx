import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { fetchAuction } from '../../actions';
import Loader from '../Loader';

function Auction() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auction.loading);
  const milage = useSelector((state) => {
    const { mileage } = state.auction.auctionInfo;
    return mileage;
  });
  const auctionInfo = useSelector((state) => {
    const auctions = state.auctions.auctions_content;
    return auctions.find((item) => item.id === Number(id));
  });

  useEffect(() => {
    dispatch(fetchAuction(id));
  }, [dispatch, id]);

  return (
    loading
      ? <Loader />
      : (
        <Box>
          <Typography variant="h5">{`Подробная информация об автомобиле ${auctionInfo && auctionInfo.title}`}</Typography>
          <Box mt={3} sx={{ maxWidth: '100%', display: 'block' }}>
            <img
              src={`${process.env.CONFIG.IMAGES_BASEPATH}${auctionInfo && auctionInfo.imgUrl}`}
              alt="car"
              style={{ width: '50%', height: 'auto' }}
            />
          </Box>
          <Typography mt={3}>{`Пробег: ${milage} км`}</Typography>
        </Box>
      )
  );
}

export default Auction;
