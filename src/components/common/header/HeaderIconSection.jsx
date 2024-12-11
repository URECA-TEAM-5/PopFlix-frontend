import { faBell, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { IconSection } from './style/HeaderStyle';
import { Link } from 'react-router-dom';
import LoginModal from '../../Login/LoginModal';

const HeaderIconSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconSection>
        <div className="inner__section">
          <FontAwesomeIcon className="icon" icon={faMoon} size="xl" />
          <Link to="/alarm">
            <FontAwesomeIcon className="icon" icon={faBell} size="xl" />
          </Link>
          {localStorage.getItem('accessToken') ? (
            <Link to="/mypage">
              <img className="profile" src="/assets/profile_1.svg" alt="/assets/profile_1.svg" />
            </Link>
          ) : (
            <>
              <FontAwesomeIcon
                className="icon"
                icon={faUser}
                size="xl"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
              <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          )}
        </div>
      </IconSection>
    </>
  );
};

export default HeaderIconSection;
