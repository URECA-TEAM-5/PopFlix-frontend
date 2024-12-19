import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const PhotoReviewContainer = styled.div`
  display: block;
  max-width: 51.25rem;
  width: 100%;
  justify-items: center;
  min-height: 90vh;

  animation: fadeIn 0.5s ease-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      color: ${colors.orange};
    }
  }
`;

export const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  padding: 0 0.5rem;
  caret-color: transparent;

  .inner__section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${colors.white};
  }

  .text__message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text__header_title {
    font-size: 1.5rem;
  }

  .text__movie_title {
    color: ${colors.cement_gray};
    font-size: 0.75rem;
  }

  .icon {
    width: 1.875rem;
    height: 1.875rem;
    cursor: pointer;

    &:hover {
      color: ${colors.orange};
      transition: 0.3s ease;
    }

    &:not(:hover) {
      transition: 0.3s ease-out;
    }
  }
`;

export const ImageContainer = styled.div`
  display: block;
  padding-top: 1rem;
  justify-items: center;
  caret-color: transparent;

  .inner__section {
    max-width: 31.25rem;
    width: 100%;
    height: 34.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .text__date {
    text-align: end;
    width: 100%;
    font-size: 0.75rem;
  }

  .image__thumbnail {
    width: 31.25rem;
    height: 31.25rem;
    object-fit: cover;
    background-repeat: no-repeat;
  }
`;

export const BodyContainer = styled.div`
  display: block;
  width: 100%;

  .inner__section {
    padding: 3.375rem 2.375rem 0rem 2.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.05rem solid ${colors.white};
  }

  .review__section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .text__review {
    font-size: 0.9375rem;
    word-break: keep-all;
    letter-spacing: 0.05rem;
    white-space: pre-wrap;
  }

  .text__report {
    width: 100%;
    padding: 1.5rem 0;
    text-align: end;
    font-size: 0.875rem;
    color: ${colors.cement_gray};
  }
`;
