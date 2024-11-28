import { faBell, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconSection } from './style/HeaderStyle';
import { Link } from 'react-router-dom';

const HeaderIconSection = () => {
  return (
    <>
      <IconSection>
        <div className="inner__section">
          <FontAwesomeIcon className="icon" icon={faMoon} size="xl" />
          <Link to="/alarm">
            <FontAwesomeIcon className="icon" icon={faBell} size="xl" />
          </Link>
          <Link to="/mypage">
            <FontAwesomeIcon className="icon" icon={faUser} size="xl" />
          </Link>
        </div>
      </IconSection>
    </>
  );
};

export default HeaderIconSection;
