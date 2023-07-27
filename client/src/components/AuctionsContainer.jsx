import { Box } from '@mui/material';

function AuctionsContainer() {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    }}
    >
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Box>
  );
}

export default AuctionsContainer;
