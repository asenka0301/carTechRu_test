import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box, FormGroup, FormLabel, TextField, InputAdornment, IconButton,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { fetchAuctions } from '../actions';

function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    dispatch(fetchAuctions(inputValue));
    setInputValue('');
  };

  return (
    <Box mb={3} paddingLeft={3}>
      <FormGroup>
        <FormLabel>Поиск по названию</FormLabel>
        <TextField
          type="search"
          id="outlined-basic"
          placeholder="Введите текст"
          variant="outlined"
          sx={{ width: '300px', marginTop: '5px' }}
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}><SearchIcon /></IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormGroup>
    </Box>
  );
}

export default Search;
