import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useGetAuctionQuery, useGetAuctionsQuery } from '../../api/apiSlice';
import useAuctions from '../../hooks';

import Loader from '../Loader';

const getCarInfo = (auctions, carId) => auctions.find((auction) => auction.id === +carId);

function Auction() {
  const { id } = useParams();
  const { auctions } = useAuctions();
  const { data: auctionsList } = useGetAuctionsQuery(auctions);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
  } = useGetAuctionQuery(id);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    const carInfo = getCarInfo(auctionsList, id);
    content = (
      <>
        <Typography variant="h5">{`Подробная информация об автомобиле ${carInfo.title}`}</Typography>
        <Box mt={3} sx={{ maxWidth: '100%', display: 'block' }}>
          <img
            src={`${process.env.CONFIG.IMAGES_BASEPATH}${carInfo.imgUrl}`}
            alt="car"
            style={{ width: '50%', height: 'auto' }}
          />
        </Box>
        <Typography mt={3}>{`Пробег: ${data.auction.mileage} км`}</Typography>
      </>
    );
  } else if (isError) {
    content = <div>Error</div>;
  }

  return (
    <Box>
      {content}
    </Box>
  );
}

export default Auction;
