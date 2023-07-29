/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import AuctionCountDown from './AuctionCountDown';
import Bid from './Bid';

function AuctionsItem({
  title,
  id,
  imgUrl,
  finishTime,
  bid,
}) {
  return (
    <Card sx={{ position: 'relative', maxWidth: 345 }}>
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
  );
}

export default AuctionsItem;
