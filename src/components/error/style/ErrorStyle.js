import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const ErrorContainer = styled.div`
  display: block;
  justify-items: center;
  align-content: center;
  width: 100%;
  min-height: 90rem;
  caret-color: transparent;
`;

export const ErrorImageContainer = styled.div`
  max-width: 30.8125rem;
  width: 100%;
  max-height: 14.625rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  .text {
    font-size: 11.25rem;
  }
`;

export const ErrorMessageContainer = styled.div`
  display: block;
  justify-items: center;

  .text__title {
    padding: 2rem 0;
    font-size: 1.875rem;
  }

  .text__subtitle {
    font-size: 1.5rem;
    color: ${colors.cement_gray};
  }
`;

export const ErrorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  min-height: 5.875rem;
`;

export const ErrorEmptyWrapper = styled.div`
  display: block;
  height: 100%;
  justify-items: center;
  align-content: center;

  .img__empty {
    width: 10rem;
    height: 10rem;
  }

  .text__message {
    font-size: 1.5rem;
  }

  .text__description {
    font-size: 1rem;
    color: ${colors.cement_gray};
  }
`;
