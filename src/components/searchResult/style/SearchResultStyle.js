import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const ResultWrapper = styled.div`
  padding: 9.125rem 0;
  width: 100%;
  display: block;
  justify-items: center;
  min-height: 90rem;
  caret-color: transparent;
`;

export const MessageWrapper = styled.div`
  display: block;
  justify-items: center;
  color: ${colors.white};

  .text__highlight {
    color: ${colors.orange};
  }

  .text__message {
    font-size: 1.5rem;
  }

  .text__description {
    font-size: 1rem;
  }
`;

export const ResultListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  width: 100vw;
  padding: 4.25rem 0;
  gap: 4.25rem;
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 11.375rem;

  .result__poster-image {
    max-width: 7.75rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  .result__movie-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${colors.cement_gray};
    font-size: 1rem;
    padding-left: 1.6875rem;
    width: 100%;
    height: 100%;
  }

  .text__title {
    padding-right: 1rem;
    font-size: 1.5rem;
    color: ${colors.white};
  }

  .text__man-info {
    line-height: 1.2;
  }

  .text__score {
    font-size: 0.875rem;
    color: ${colors.white};
    width: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .icon,
  .icon__heart {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.3rem;
  }

  .icon__heart {
    color: #ff0000;
  }

  .div__buttons {
    width: 4.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
