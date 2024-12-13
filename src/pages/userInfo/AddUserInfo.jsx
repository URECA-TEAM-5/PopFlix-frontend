import React, { useState } from 'react';
import UserInfoImage from '../../components/userInfo/UserInfoImage';
import UserInfoNickname from '../../components/userInfo/UserInfoNickname';
import UserInfoGenre from '../../components/userInfo/UserInfoGenre';
import UserInfoGender from '../../components/userInfo/UserInfoGender';
import { Box, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { useUserInfo } from '../../stores/userInfo/userStore';

const AddUserInfo = () => {
  const { signup } = useUserInfo();

  // 프로필 사진 상태
  const [profileImage, setProfileImage] = useState(null);

  // 닉네임 상태
  const [nickname, setNickname] = useState('');
  const handleNicknameChange = (event) => setNickname(event.target.value);
  const checkDuplicate = () => alert('중복 확인 로직을 여기에 작성하세요.');

  // 장르 상태
  const [selectedGenre, setSelectedGenre] = useState('액션');
  const handleGenreChange = (e) => setSelectedGenre(e.target.value);

  // 성별 상태
  const [gender, setGender] = useState('');
  const handleGenderChange = (event) => setGender(event.target.value);

  // 장르 리스트
  const genre_sample = [
    { genre: '모험', id: 12 },
    { genre: '판티지', id: 14 },
    { genre: '애니메이션', id: 16 },
    { genre: '드라마', id: 18 },
    { genre: '공포', id: 27 },
    { genre: '액션', id: 28 },
    { genre: '코미디', id: 35 },
    { genre: '역사', id: 36 },
    { genre: '서부', id: 37 },
    { genre: '스릴러', id: 53 },
    { genre: '범죄', id: 80 },
    { genre: '다큐멘터리', id: 99 },
    { genre: 'SF', id: 878 },
    { genre: '미스터리', id: 9648 },
    { genre: '음악', id: 10402 },
    { genre: '로맨스', id: 10749 },
    { genre: '전쟁', id: 10752 },
    { genre: 'TV영화', id: 10770 },
  ];

  const handleSignUp = async (e) => {
    e.preventDefault();
    let data = {
      nickname: nickname,
      genreId: genre_sample.find((item) => item.genre === selectedGenre).id,
      gender: 'MALE',
      defaultProfileImage: 'https://bucket-uplus-1.s3.amazonaws.com/defaults/profile1.png',
    };
    console.log(data);

    // await signup(data); <<< API 연동 후 작업 진행
    alert('회원가입 버튼 클릭');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', p: '5rem 0rem' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '31.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {/* 프로필 사진 등록 */}
        <UserInfoImage profileImage={profileImage} setProfileImage={setProfileImage} />

        {/* 닉네임 입력 */}
        <UserInfoNickname nickname={nickname} onChange={handleNicknameChange} onCheckDuplicate={checkDuplicate} />

        {/* 장르 선택 */}
        <UserInfoGenre selectedGenre={selectedGenre} genres={genre_sample} onGenreChange={handleGenreChange} />

        {/* 성별 선택 */}
        <UserInfoGender gender={gender} onChange={handleGenderChange} />

        {/* 등록 버튼 */}
        <Button
          sx={{
            display: 'flex',
            width: '100%',
            height: '3.125rem',
            backgroundColor: colors.orange,
            borderRadius: '0.6125rem',
            '&:focus': {
              outline: 'none',
            },
          }}
          onClick={handleSignUp}
        >
          <span className="bold">등록하기</span>
        </Button>
      </Box>
    </Box>
  );
};

export default AddUserInfo;
