import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { UserInfoNickNameTitle } from './style/UserInfoStyle';

const UserInfoNickname = ({ nickname, onChange, onCheckDuplicate }) => {
  return (
    <Box sx={{ pb: '2.25rem', width: '100%' }}>
      <UserInfoNickNameTitle className="bold">닉네임</UserInfoNickNameTitle>
      <Box sx={{ display: 'flex', gap: '0.438rem', alignItems: 'center' }}>
        <TextField
          value={nickname}
          onChange={onChange}
          placeholder="공백없이 10자 이내로 입력해주세요."
          sx={{
            width: '100%',
            backgroundColor: colors.navy_gray,
            borderRadius: '0.625rem',
            input: { color: 'white', height: '1.063rem', fontFamily: 'SUIT-Bold, sans-serif' },
            '& .MuiInputBase-input::placeholder': {
              fontFamily: 'SUIT-Bold, sans-serif',
              color: colors.cement_gray,
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.orange,
              },
            },
          }}
        />
        <Button
          onClick={onCheckDuplicate}
          sx={{
            backgroundColor: colors.orange,
            color: colors.white,
            borderRadius: '0.3125rem',
            height: '3.2rem',
            width: '6.188rem',
            fontWeight: 'bold',
            '&:focus': {
              outline: 'none',
            },
          }}
        >
          <p className="bold">중복확인</p>
        </Button>
      </Box>
    </Box>
  );
};

export default UserInfoNickname;
