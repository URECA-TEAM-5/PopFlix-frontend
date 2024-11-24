import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 57.5rem;
  height: 9.36rem;
  border: 0.06rem solid ${colors.cement_gray};
  border-radius: 0.625rem;
  background-color: ${colors.navy_gray};
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.4) 0 0 1.8rem;
    transition: 0.3s ease;
  }

  &:not(:hover) {
    transition: 0.3s ease-out;
  }

  .inner__section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.3rem 2.56rem;
    width: -webkit-fill-available;
    height: 100%;
  }

  .message__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.7rem;
  }

  .profileImage__section {
    padding: 0 0.5rem 0 0;
  }

  .profileImage {
    width: 2rem;
    height: 2rem;
  }
`;

export const MessageText = styled.span`
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.$fontColor};
  width: ${(props) => (props.$width ? `${props.$width}rem` : 'auto')};

  .text__highlight {
    color: ${colors.orange};
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0.4rem;
  width: 100%;
  gap: 1.8rem;
`;

export const CheckBoxConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .checkbox__section {
    padding: 0.6875rem;
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.125rem;
    height: 1.125rem;
    font-size: 0.8rem;
    background-color: ${colors.orange};
    color: ${colors.white};
    border-radius: 0.12rem;
    border: none;
  }

  .text__title {
    font-size: 1rem;
  }
`;

export const AlarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 0;
  gap: 3rem;
  height: 100vh;
  caret-color: transparent;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: end;
  justify-content: center;

  .image__section {
    width: 6.375rem;
    height: 6rem;
  }

  .text__section {
    display: flex;
    flex-direction: column;
    font-size: 1.75rem;
  }

  .text__highlight {
    color: ${colors.orange};
  }
`;
