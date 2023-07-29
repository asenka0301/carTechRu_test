/* eslint-disable react/prop-types */
import { Box } from '@mui/material';

function InfoMessage({ isResponseError, isAuctionsFound }) {
  function prepareMessage(isError, isAuctions) {
    if (isError) {
      return 'Ошибка';
    }
    if (!isAuctions) {
      return 'Аукционы не найдены';
    }
    return '';
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '300px',
    }}
    >
      {prepareMessage(isResponseError, isAuctionsFound)}
    </Box>
  );
}

export default InfoMessage;
