import React from 'react';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { colors } from '../../global/globalStyle';

const UserInfoGenre = ({ selectedGenre, genres, onGenreChange }) => {
  return (
    <Box sx={{ pb: '2.125rem', width: '100%' }}>
      <p className="bold" style={{ margin: '0', paddingBottom: '1.25rem' }}>
        장르
      </p>
      <FormControl
        fullWidth
        sx={{
          backgroundColor: colors.navy_gray,
          borderRadius: '0.3125rem',
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.orange,
            },
          },
        }}
      >
        <Select
          value={selectedGenre}
          onChange={onGenreChange}
          sx={{
            color: 'white',
            fontFamily: 'SUIT-Bold, sans-serif',
            '.MuiSelect-icon': { color: 'white' },
          }}
        >
          {genres.map((genre, index) => (
            <MenuItem key={index} value={genre} sx={{ fontFamily: 'SUIT-Bold, sans-serif' }}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default UserInfoGenre;
