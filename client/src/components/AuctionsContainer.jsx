import {
  Container,
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import AuctionsItem from './AuctionsItem';

function AuctionsContainer() {
  const auctions = useSelector((state) => state.auctions.auctions_content);
  return (
    <Container>
      <Grid container spacing={2}>
        {auctions.map(({
          title,
          id,
          imgUrl,
          finishTime,
          bid,
        }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <AuctionsItem title={title} id={id} imgUrl={imgUrl} finishTime={finishTime} bid={bid} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AuctionsContainer;
