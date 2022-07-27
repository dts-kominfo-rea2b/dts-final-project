import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import theme from '../assets/mui-theme';

export default function CustomizedInputBase({ search, setSearch }) {

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const search = data.get('search');
    setSearch(search);
  }

  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
    >
      <InputBase
        name="search"
        sx={{ ml: 1, flex: 1, color: theme.palette.primary.contrastText, borderRadius: '50px' }}
        placeholder="Search Pokemon"
        inputProps={{ 'aria-label': 'search pokemon' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
