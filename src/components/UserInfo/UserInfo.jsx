import React, { useState } from 'react';
import { Box, Typography, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormControl, TextField } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { colors } from '../../global/globalStyle';

const UserInfo = () => {
  // radio 버튼 상태 관리
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // dropdown 상태 관리
  const [selectedGenre, setSelectedGenre] = useState('액션');
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // 프로필 사진 관리
  const [profileImage, setProfileImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const genres = [
    '액션',
    '모험',
    '애니메이션',
    '코미디',
    '범죄',
    '다큐멘터리',
    '드라마',
    '판타지',
    '역사',
    '공포',
    '음악',
    '미스터리',
    '로맨스',
    'SF',
    'TV 영화',
    '스릴러',
    '전쟁',
    '서부',
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '28rem',
          padding: '2rem',
          borderRadius: '0.625rem',
        }}
      >
        <h2
          className="bold"
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          프로필을 작성해 주시면
          <br />
          PopFlix에서 더 열심히 추천해드릴게요!
        </h2>

        {/* 프로필 사진 등록 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mb: '2rem',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '6rem',
              height: '6rem',
              borderRadius: '50%',
              backgroundColor: colors.navy_gray,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* 업로드된 사진 */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="프로필"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : null}

            {/* 하단 카메라 아이콘 */}
            <Box
              sx={{
                position: 'absolute',
                bottom: '0rem',
                right: '-0.2rem',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: '#84868c',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PhotoCameraIcon
                sx={{
                  fontSize: '1.5rem',
                  color: colors.black,
                }}
              />
            </Box>

            {/* 파일 업로드 input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer',
              }}
            />
          </Box>
        </Box>

        {/* 닉네임 입력 */}
        <Box sx={{ mb: '1.5rem' }}>
          <p className="bold">닉네임</p>
          <Box sx={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
            <TextField
              placeholder="공백없이 10자 이내로 입력해주세요."
              fullWidth
              sx={{
                backgroundColor: '#25292e',
                borderRadius: '0.625rem',
                input: { color: 'white', height: '1.2rem', fontFamily: 'SUIT-Bold, sans-serif' },
                '& .MuiInputBase-input::placeholder': {
                  fontFamily: 'SUIT-Bold, sans-serif',
                  color: '#84868c',
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.orange,
                  },
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: colors.orange,
                color: '#fff',
                borderRadius: '0.3125rem',
                height: '3.2rem',
                minWidth: '6rem',
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

        {/* 장르 선택 */}
        <Box sx={{ mb: '1.5rem' }}>
          <p className="bold">장르</p>
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
              onChange={handleGenreChange}
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

        {/* 성별 선택 */}
        <Box sx={{ mb: '2rem' }}>
          <p className="bold">성별</p>
          <RadioGroup
            row
            value={selectedValue}
            onChange={handleChange}
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
                    ml: '10rem',
                  }}
                />
              }
              label={<p className="bold">남성</p>}
            />
          </RadioGroup>
        </Box>

        {/* 등록 버튼 */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            sx={{
              backgroundColor: colors.orange,
              borderRadius: '0.6125rem',
              padding: '0rem 12rem',
              fontSize: '1rem',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            <p className="bold">등록하기</p>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
