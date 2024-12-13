import React from 'react';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { UserInfoGenreTitle } from './style/UserInfoStyle';

const UserInfoGenre = ({ selectedGenre, genres, onGenreChange }) => {
  return (
    <Box sx={{ pb: '2.125rem', width: '100%' }}>
      <UserInfoGenreTitle className="bold">장르</UserInfoGenreTitle>

      <FormControl
        fullWidth
        sx={{
          backgroundColor: colors.navy_gray,
          borderRadius: '0.625rem',
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
            color: colors.white,
            fontFamily: 'SUIT-Bold, sans-serif',
            '.MuiSelect-icon': { color: colors.white },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: '18rem',
                overflowY: 'auto',
              },
            },
          }}
        >
          {genres.map(({ genre, id }, index) => (
            <MenuItem key={index + id} value={genre} sx={{ span: { color: colors.black } }}>
              <span className="bold">{genre}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default UserInfoGenre;
