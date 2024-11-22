import { faBell, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconSection } from './style/HeaderStyle';

const HeaderIconSection = () => {
  return (
    <>
      <IconSection>
        <FontAwesomeIcon className="icon" icon={faMoon} size="xl" />
        <FontAwesomeIcon className="icon" icon={faBell} size="xl" />
        <FontAwesomeIcon className="icon" icon={faUser} size="xl" />
      </IconSection>
    </>
  );
};

export default HeaderIconSection;
