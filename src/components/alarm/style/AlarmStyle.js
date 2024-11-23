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
  caret-color: transparent;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.3) 1px 8px 24px;
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
    width: 28.875rem;
  }
`;

export const MessageText = styled.span`
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.$fontColor};
  width: ${(props) => (props.$width ? `${props.$width}rem` : 'auto')};
`;
