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

export const EmptyMessageContainer = styled.div`
  padding-top: 21.5rem;
  margin: 0;
  height: 43rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image__empty {
    width: 21.4375rem;
    height: 14.6875rem;
  }

  .text__section {
    width: 27rem;
    height: 8.75rem;
    padding: 1.375rem 2.75rem;
    font-size: 2.5rem;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text__highlight {
    color: ${colors.orange};
  }

  .button__section {
    padding-top: 5rem;
    width: 32.875rem;
    height: 16.625rem;
  }

  .button__image {
    width: 3rem;
    height: 2.75rem;
  }

  .button__message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .button {
    width: 100%;
    height: 5.5rem;
    border-radius: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.navy_gray};
    background-color: ${colors.beige};

    &:hover {
      box-shadow: rgba(255, 255, 255, 0.4) 0 0 2.8rem;
      transform: translateY(-0.4rem);
      transition: 0.3s ease;

      .text__subMessage {
        border-color: ${colors.beige};
        color: ${colors.orange};
        transition: 0.3s ease;
      }
    }

    &:not(:hover) {
      transition: 0.3s ease-out;
    }
  }

  .text__subMessage {
    font-size: 1rem;
    color: ${colors.cement_gray};
    border-bottom: 0.05rem solid ${colors.cement_gray};
  }
`;
