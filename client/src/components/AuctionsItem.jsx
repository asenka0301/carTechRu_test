/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function AuctionsItem({
  title,
  id,
  imgUrl,
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
        <div>Время</div>
      </CardContent>
      <CardMedia
        component="img"
        src={`${process.env.CONFIG.IMAGES_BASEPATH}${imgUrl}`}
        alt="Auction_car"
        height="150"
        sx={{ objectFit: 'cover' }}
      />
    </Card>
  );
}

export default AuctionsItem;
