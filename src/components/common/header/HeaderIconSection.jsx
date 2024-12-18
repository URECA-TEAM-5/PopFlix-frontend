import { faBell, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { IconSection } from './style/HeaderStyle';
import { Link } from 'react-router-dom';
import LoginModal from '../../Login/LoginModal';
import MyInfoModal from '../../userInfo/modal/MyInfoModal';

const HeaderIconSection = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMyInfoModalOpen, setIsMyInfoModalOpen] = useState(false);

  return (
    <>
      <IconSection>
        <div className="inner__section">
          <FontAwesomeIcon className="icon" icon={faMoon} size="xl" />
          <Link to="/alarm">
            <FontAwesomeIcon className="icon" icon={faBell} size="xl" />
          </Link>
          {sessionStorage.getItem('accessToken') ? (
            <>
              {(() => {
                const user = JSON.parse(sessionStorage.getItem('user')); // User 정보 가져오기
                const profileImage = user?.profileImage || user?.data?.defaultProfileImage; // profileImage 우선 사용

                return <img className="profile" src={profileImage} alt="profile" onClick={() => setIsMyInfoModalOpen(true)} style={{ cursor: 'pointer' }} />;
              })()}
              <MyInfoModal open={isMyInfoModalOpen} onClose={() => setIsMyInfoModalOpen(false)} />
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="icon"
                icon={faUser}
                size="xl"
                onClick={() => {
                  setIsLoginModalOpen(true);
                }}
              />
              <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
            </>
          )}
        </div>
      </IconSection>
    </>
  );
};

export default HeaderIconSection;
