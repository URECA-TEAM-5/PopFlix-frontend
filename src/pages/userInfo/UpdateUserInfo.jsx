import React, { useState } from 'react';
import UserInfoImage from '../../components/userInfo/UserInfoImage';
import UserInfoNickname from '../../components/userInfo/UserInfoNickname';
import UserInfoGenre from '../../components/userInfo/UserInfoGenre';
import UserInfoGender from '../../components/userInfo/UserInfoGender';
import { Box, Button } from '@mui/material';
import { colors } from '../../global/globalStyle';
import WithdrawalModal from '../../components/userInfo/modal/WithdrawalModal';
import { apiCheckDuplicate, apiDeleteSignout, apiUpdateUserInfo } from '../../api/auth/auth';
import { chkUserInfo } from '../../components/userInfo/modal/chkUserInfo';

const UpdateUserInfo = () => {
  const user = chkUserInfo(); // 유저정보 SessionStroage로 부터 가져오기
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
  // 유저 정보
  const originalNickname = user.nickname;
  const initialProfileImage = user?.profileImage || user?.defaultProfileImage || '';
  const initialNickname = user.nickname;
  const initialGenreId = user.genreIds?.[0];
  const initialGender = user.gender;

  // 회원탈퇴 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // 상태관리
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [nickname, setNickname] = useState(initialNickname);
  const [isNicknameValid, setIsNicknameValid] = useState(''); // 닉네임 유효 상태: '', true, false
  const [selectedGenre, setSelectedGenre] = useState(() => {
    // 장르 id를 기반으로 genre를 찾아서 반환해야 함
    const genreObj = genre_sample.find((g) => g.id === initialGenreId);
    return genreObj ? genreObj.genre : genre_sample[0].genre;
  });
  const [gender, setGender] = useState(initialGender);

  // 닉네임 중복 확인
  const checkDuplicate = async () => {
    if (nickname === originalNickname) {
      alert('닉네임을 변경하고 중복확인해주세요.');
      return;
    }

    try {
      const isAvailable = await apiCheckDuplicate(nickname);

      if (isAvailable) {
        alert('사용 가능한 닉네임입니다.');
        setIsNicknameValid(true); // 닉네임 유효 상태 업데이트
      } else {
        alert('이미 사용 중인 닉네임입니다.');
        setIsNicknameValid(false);
      }
    } catch (error) {
      console.error('닉네임 중복 확인 실패:', error);
      alert('중복 확인 중 오류가 발생했습니다.');
    }
  };

  // 핸들러
  const handleNicknameChange = (event) => {
    const value = event.target.value;

    // 유효성 검사
    if (value.length > 10) {
      alert('닉네임은 10자 이내로 작성해주세요.');
      return;
    }
    if (/\s/.test(value)) {
      alert('공백은 입력할 수 없습니다.');
      return;
    }
    setNickname(value);
    // 닉네임이 원래 닉네임과 다를 때만 중복확인 필요
    if (value !== originalNickname) {
      setIsNicknameValid(false);
    } else {
      // 원래 닉네임으로 돌아갔으면 중복확인 필요 없음
      setIsNicknameValid('');
    }
  };
  const handleGenreChange = (event) => setSelectedGenre(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);

  // 회원탈퇴 로직
  const handleSignout = async () => {
    try {
      await apiDeleteSignout(user.userId); // userId는 user 데이터 구조에 맞게 수정
      alert('회원탈퇴가 완료되었습니다.');
      sessionStorage.clear();
      window.location.href = '/'; // 메인 페이지로 이동
    } catch (error) {
      alert('회원탈퇴에 실패하였습니다.');
      console.error(error);
    } finally {
      handleCloseModal();
    }
  };

  const handleUpdateUserInfo = async (e) => {
    e.preventDefault();

    if (nickname !== originalNickname && !isNicknameValid) {
      alert('닉네임 중복 확인을 해주세요.');
      return;
    }

    // FormData 생성
    const formData = new FormData();

    // Blob URL 또는 기본 이미지 경로 확인
    const isBlob = profileImage && profileImage.startsWith('blob:');

    // 데이터 생성
    const userData = {
      nickname: nickname,
      genreId: genre_sample.find((item) => item.genre === selectedGenre)?.id,
      gender: gender,
      defaultProfileImage: isBlob ? null : profileImage, // Blob URL이면 null로 설정
    };

    formData.append('data', JSON.stringify(userData));

    // Blob URL 또는 업로드된 파일 처리
    if (isBlob) {
      try {
        const blobData = await fetch(profileImage).then((res) => res.blob()); // Blob 데이터를 서버로 보낼 준비
        formData.append('profileImage', blobData, 'profileImage.jpg'); // Blob을 파일로 전송
      } catch (error) {
        console.error('Blob 데이터를 처리하는 중 오류 발생:', error);
        alert('프로필 사진을 처리하는 중 오류가 발생했습니다.');
        return;
      }
    }

    // // FormData 내용 확인
    // console.log('FormData 내용:');
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    try {
      // API 요청
      const response = await apiUpdateUserInfo(user.userId, formData);
      console.log('회원가입 성공:', response);
      alert('회원가입이 완료되었습니다.');
      window.location.href = '/welcome'; // 회원가입 성공하면 환영페이지로 이동
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
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
          onClick={handleUpdateUserInfo}
        >
          <span className="bold">등록하기</span>
        </Button>
        <Box
          sx={{
            textAlign: 'right',
            width: '100%',
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: 'none',
              fontSize: '0.7rem',
              paddingRight: '0.8rem',
              cursor: 'pointer',
              color: colors.cement_gray,
            }}
            className="bold"
            onClick={handleOpenModal}
          >
            회원탈퇴
          </a>
        </Box>
      </Box>
      <WithdrawalModal open={isModalOpen} onClose={handleCloseModal} onSignout={handleSignout} />
    </Box>
  );
};

export default UpdateUserInfo;
