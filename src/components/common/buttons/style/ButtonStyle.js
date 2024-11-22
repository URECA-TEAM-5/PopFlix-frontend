import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const ButtonSection = styled.div`
  width: ${(props) => (props.$width ? `${props.$width}rem` : '5rem')};
  height: ${(props) => (props.$height ? `${props.$height}rem` : '2.5rem')};
  caret-color: transparent;
  cursor: pointer;
  padding: 0.05rem;

  .button__default {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 1.9rem;
    background-color: ${(props) => props.$bgColor || colors.orange};
    color: ${(props) => props.$fontColor || colors.white};
    font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '0.9rem')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(240, 150, 5, 0.4);
      color: ${colors.orange};
      transition: 0.3s ease;
    }

    &:focus {
      outline: none;
    }
  }

  .button__outline {
    width: 100%;
    height: 100%;
    border: 0.05rem solid ${(props) => props.$borderColor || colors.space_gray};
    border-radius: 1.9rem;
    font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '0.9rem')};
    color: ${(props) => props.$fontColor || colors.space_gray};
    background-color: ${(props) => props.$bgColor || colors.black};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 0.05rem solid rgba(240, 150, 5, 0.5);
      background-color: rgba(240, 150, 5, 0.5);
      color: ${colors.white};
      transition: 0.5s ease;
    }

    &:focus {
      outline: none;
      border: 0.05rem solid ${colors.orange};
      background-color: ${colors.orange};
    }
  }
`;
