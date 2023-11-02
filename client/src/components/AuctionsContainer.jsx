import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import AuctionCountDown from './AuctionCountDown';
import Bid from './Bid';

function AuctionsContainer({ auctions }) {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      { auctions.map(({
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

export default AuctionsContainer;
