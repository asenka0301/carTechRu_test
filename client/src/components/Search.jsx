import {
  Box, FormGroup, FormLabel, TextField,
} from '@mui/material';

function Search() {
  return (
    <Box mb={3}>
      <FormGroup>
        <FormLabel>
          Поиск по названию
        </FormLabel>
        <TextField
          type="search"
          id="outlined-basic"
          label="Введите текст"
          variant="outlined"
          sx={{ width: '25%' }}
        />
      </FormGroup>
    </Box>
  );
}

export default Search;
