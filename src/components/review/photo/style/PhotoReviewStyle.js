import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const PhotoReviewContainer = styled.div`
  display: block;
  padding: 1.5rem 18.5rem;
  width: 53.125rem;
  min-height: 90vh;
`;

export const HeaderContainer = styled.div`
  display: block;
  caret-color: transparent;
  width: 100%;

  .inner__section {
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
  width: 100%;
  padding-top: 1rem;
  caret-color: transparent;

  .inner__section {
    width: 31.25rem;
    height: 34.375rem;
    padding: 0 10.875rem;
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

export const CommentListContainer = styled.div`
  width: 100%;
  display: block;

  .inner__section {
    padding: 3.75rem 4.47rem 0 4.47rem;
  }

  .comments__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .comments__head {
    width: 100%;
    font-size: 0.9375rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .comments__item {
    /* width: 43.75rem; */
    /* padding: 1.6875rem 1.5rem; */
    padding-top: 1.6875rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: ${colors.orange}; */
  }

  .profile__section {
    padding: 0 1.75rem 0 0.875rem;
  }

  .profile {
    width: 5.625rem;
    height: 5.625rem;
    border: 0.08rem solid ${colors.space_gray};
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .div__column {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .text__nickname {
    padding: 0 1rem;
  }

  .text__date {
    color: ${colors.cement_gray};
  }

  .text__review {
    padding: 0.75rem 0 1.75rem 0;
    font-size: 0.9375rem;
  }

  .div__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`;
