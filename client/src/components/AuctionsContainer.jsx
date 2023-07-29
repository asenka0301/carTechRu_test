/* eslint-disable react/prop-types */
import {
  Container,
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import AuctionsItem from './AuctionsItem';
import InfoMessage from './InfoMessage';

function AuctionsContainer() {
  const auctions = useSelector((state) => state.auctions.auctions_content);
  const responseError = useSelector((state) => state.auctions.error);
  const isResponseError = (responseError !== null);
  const isAuctionsFound = (auctions && auctions.length !== 0);

  return (
    <Container>
      {(isResponseError || !isAuctionsFound)
        ? <InfoMessage isResponseError={isResponseError} isAuctionsFound={isAuctionsFound} />
        : (
          <Grid container spacing={2}>
            {auctions.map(({
              title,
              id,
              imgUrl,
              finishTime,
              bid,
            }) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <AuctionsItem
                  title={title}
                  id={id}
                  imgUrl={imgUrl}
                  finishTime={finishTime}
                  bid={bid}
                />
              </Grid>
            ))}
          </Grid>
        )}
    </Container>
  );
}

export default AuctionsContainer;
