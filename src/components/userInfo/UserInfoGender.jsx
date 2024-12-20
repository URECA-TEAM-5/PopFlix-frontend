import React from 'react';
import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { UserInfoGenderTitle } from './style/UserInfoStyle';

const UserInfoGender = ({ gender, onChange }) => {
  return (
    <Box sx={{ width: '100%', pb: '2.75rem' }}>
      <UserInfoGenderTitle className="bold">성별</UserInfoGenderTitle>
      <RadioGroup
        row
        value={gender}
        onChange={onChange}
        sx={{
          justifyContent: 'center',
        }}
      >
        <FormControlLabel
          value="FEMALE"
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
          value="MALE"
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
