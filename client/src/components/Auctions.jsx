import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useGetAuctionsQuery } from '../api/apiSlice';
import useAuctions from '../hooks';
import { addAuctions, updateAuctions } from '../reducer/auctionSlice';

import AuctionCountDown from './AuctionCountDown';
import Bid from './Bid';

function Auctions() {
  const dispatch = useDispatch();
  const { auctions } = useAuctions();
  const { data } = useGetAuctionsQuery(auctions, {
    pollingInterval: 2000,
  });
  useEffect(() => {
    dispatch(addAuctions(data));
  }, []);

  useEffect(() => {
    dispatch(updateAuctions(data));
  }, [dispatch, data]);

  const aucts = useSelector((state) => state.auctionsReducer.auctions);

  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      { aucts.map(({
        title,
        id,
        imgUrl,
        finishTime,
        bid,
      }) => (
        <Grid item xs={12} sm={6} md={4} id={id} key={id}>
          <Card
            sx={{ position: 'relative', maxWidth: 345 }}
            onClick={() => navigate(`/${id}`)}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: 'primary.grey',
                padding: '10px',
              }}
            >
              <Typography id={id}>{title}</Typography>
              <AuctionCountDown finishTime={finishTime} />
            </CardContent>
            <CardMedia
              component="img"
              src={`${process.env.CONFIG.IMAGES_BASEPATH}${imgUrl}`}
              alt="Auction_car"
              height="150"
              sx={{ objectFit: 'cover' }}
            />
            <Bid bid={bid} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Auctions;
