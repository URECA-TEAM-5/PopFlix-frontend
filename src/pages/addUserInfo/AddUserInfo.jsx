import React, { useState } from 'react';
import UserInfoImage from '../../components/UserInfo/UserInfoImage';
import UserInfoNickname from '../../components/UserInfo/UserInfoNickname';
import UserInfoGenre from '../../components/UserInfo/UserInfoGenre';
import UserInfoGender from '../../components/UserInfo/UserInfoGender';
import { Box, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';

const AddUserInfo = () => {
  // 프로필 사진 상태
  const [profileImage, setProfileImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  // 닉네임 상태
  const [nickname, setNickname] = useState('');
  const handleNicknameChange = (event) => setNickname(event.target.value);
  const checkDuplicate = () => alert('중복 확인 로직을 여기에 작성하세요.');

  // 장르 상태
  const [selectedGenre, setSelectedGenre] = useState('액션');
  const handleGenreChange = (event) => setSelectedGenre(event.target.value);

  // 성별 상태
  const [gender, setGender] = useState('');
  const handleGenderChange = (event) => setGender(event.target.value);

  // 장르 리스트
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* 프로필 사진 등록 */}
      <UserInfoImage profileImage={profileImage} onImageUpload={handleImageUpload} />

      {/* 닉네임 입력 */}
      <UserInfoNickname nickname={nickname} onChange={handleNicknameChange} onCheckDuplicate={checkDuplicate} />

      {/* 장르 선택 */}
      <UserInfoGenre selectedGenre={selectedGenre} genres={genres} onGenreChange={handleGenreChange} />

      {/* 성별 선택 */}
      <UserInfoGender gender={gender} onChange={handleGenderChange} />

      {/* 등록 버튼 */}
      <Button
        sx={{
          display: 'flex',
          width: '25rem',
          height: '3.125rem',
          backgroundColor: colors.orange,
          borderRadius: '0.6125rem',
          '&:focus': {
            outline: 'none',
          },
        }}
        onClick={() => alert('등록 로직을 여기에 작성하세요!')}
      >
        <span className="bold">등록하기</span>
      </Button>
    </Box>
  );
};

export default AddUserInfo;
