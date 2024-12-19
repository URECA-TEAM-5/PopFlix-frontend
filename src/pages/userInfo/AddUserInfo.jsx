import React, { useState } from 'react';
import UserInfoImage from '../../components/userInfo/UserInfoImage';
import UserInfoNickname from '../../components/userInfo/UserInfoNickname';
import UserInfoGenre from '../../components/userInfo/UserInfoGenre';
import UserInfoGender from '../../components/userInfo/UserInfoGender';
import { Box, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';
import { useUserInfo } from '../../stores/userInfo/userStore';
import { apiCheckDuplicate } from '../../api/auth/auth';
import { useAlert } from '../../stores/alert/AlertStore';
import AlertMessage from '../../components/common/alert/AlertMessage';

const AddUserInfo = () => {
  const { handleAlertOpen, handleAlertClose } = useAlert();

  // 로그인한 유저 정보
  const { signup } = useUserInfo();

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

  // 상태관리
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('액션');
  const [gender, setGender] = useState(null);

  // 닉네임 중복 확인
  const checkDuplicate = async () => {
    try {
      const isAvailable = await apiCheckDuplicate(nickname);

      if (isAvailable) {
        handleAlertOpen('success', '사용 가능한 닉네임입니다.');
        setIsNicknameValid(true); // 닉네임 유효 상태 업데이트
      } else {
        handleAlertOpen('error', '이미 사용 중인 닉네임입니다.');
        setIsNicknameValid(false);
      }
    } catch (error) {
      handleAlertOpen('error', '중복 확인 중 오류가 발생했습니다.');
    }
  };

  // 실시간 닉네임 유효성 확인
  const handleNicknameChange = (event) => {
    const value = event.target.value;

    // 유효성 검사
    if (value.length > 10) {
      handleAlertOpen('error', '닉네임은 10자 이내로 작성해주세요.');
      return;
    }
    if (/\s/.test(value)) {
      handleAlertOpen('error', '공백은 입력할 수 없습니다.');
      return;
    }
    setNickname(value);
    setIsNicknameValid(false);
  };

  const handleGenreChange = (event) => setSelectedGenre(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);

  // 회원가입
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!gender) {
      handleAlertOpen('error', '성별을 선택해주세요.');
      return;
    }
    if (!profileImage) {
      handleAlertOpen('error', '프로필 사진을 선택해주세요.');
      return;
    }
    if (!isNicknameValid) {
      handleAlertOpen('error', '닉네임 중복 확인을 해주세요.');
      return;
    }

    const formData = new FormData();
    const isBlob = profileImage && profileImage.startsWith('blob:');
    const userData = {
      nickname: nickname,
      genreId: genre_sample.find((item) => item.genre === selectedGenre)?.id,
      gender: gender,
      defaultProfileImage: isBlob ? null : profileImage,
    };

    formData.append('data', JSON.stringify(userData));

    if (isBlob) {
      try {
        const blobData = await fetch(profileImage).then((res) => res.blob());
        formData.append('profileImage', blobData, 'profileImage.jpg');
      } catch (error) {
        handleAlertOpen('error', '프로필 사진을 처리하는 중 오류가 발생했습니다.');
        return;
      }
    }

    try {
      const response = await signup(formData);

      handleAlertOpen('error', '회원가입이 완료되었습니다.');
      window.location.href = '/welcome';
    } catch (error) {
      handleAlertOpen('error', '회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', p: '5rem 0rem' }}>
      <AlertMessage type={''} message={''} handleClose={() => handleAlertClose()} />
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
