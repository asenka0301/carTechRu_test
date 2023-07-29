/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

function Bid({ bid }) {
  return (
    <Box sx={{
      position: 'absolute',
      right: '0',
      bottom: '0',
      width: '150px',
      backgroundColor: 'secondary.grey',
      color: 'secondary.main',
      padding: '5px',
    }}
    >
      <Typography fontWeight="500" align="center" color="secondary.main">{`Ставка: ${bid} р`}</Typography>
    </Box>
  );
}

export default Bid;
