import React from 'react';
import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { colors } from '../../global/globalStyle';

const UserInfoGender = ({ gender, onChange }) => {
  return (
    <Box sx={{ width: '100%', pb: '2.75rem' }}>
      <p className="bold" style={{ margin: '0rem' }}>
        성별
      </p>
      <RadioGroup
        row
        value={gender}
        onChange={onChange}
        sx={{
          justifyContent: 'center',
        }}
      >
        <FormControlLabel
          value="female"
          control={
            <Radio
              sx={{
                color: colors.navy_gray,
                '&.Mui-checked': {
                  color: colors.orange,
                },
              }}
            />
          }
          label={<p className="bold">여성</p>}
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              sx={{
                color: colors.navy_gray,
                '&.Mui-checked': {
                  color: colors.orange,
                },
                ml: '7.688rem',
              }}
            />
          }
          label={<p className="bold">남성</p>}
        />
      </RadioGroup>
    </Box>
  );
};

export default UserInfoGender;
