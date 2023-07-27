import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '300px',
    }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
