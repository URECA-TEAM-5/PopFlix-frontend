import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const EmptyResultWrapper = styled.div`
  display: block;
  justify-items: center;
  width: 100%;
  padding: ${(props) => (props.$padding ? `${props.$padding}rem 0` : '2rem 0')};
  caret-color: transparent;
  animation: slideIn 0.5s ease-out forwards;

  .text__message {
    font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '1.5rem')};
  }

  .text__description {
    font-size: ${(props) => (props.$fontSize ? `${props.$fontSize - 0.5}rem` : '1rem')};
    color: ${colors.cement_gray};
  }
`;

export const EmptyResultImage = styled.img`
  display: block;
  padding: 1rem 0;
  width: ${(props) => (props.$size ? `${props.$size}rem` : '7rem')};
  height: ${(props) => (props.$size ? `${props.$size}rem` : '7rem')};
  object-fit: fill;
`;
