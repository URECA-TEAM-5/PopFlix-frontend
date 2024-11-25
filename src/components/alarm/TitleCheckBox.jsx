import React from 'react';
import { CheckBoxConatiner } from './style/AlarmStyle';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleCheckBox = ({ title }) => {
  return (
    <CheckBoxConatiner>
      <div className="checkbox__section">
        <div className="checkbox">
          <FontAwesomeIcon className="checkbox__icon" icon={faCheck} />
        </div>
      </div>
      <div className="text__title bold">{title}</div>
    </CheckBoxConatiner>
  );
};

export default TitleCheckBox;
