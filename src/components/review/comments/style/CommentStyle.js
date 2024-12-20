import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const CommentListContainer = styled.div`
  display: block;
  width: 100%;
  justify-items: center;
  padding-top: 3.75rem;

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

  .inner__section {
    max-width: 43.75rem;
    width: 100%;
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
`;

export const CommentListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  caret-color: transparent;

  .comments__head {
    width: 100%;
    font-size: 0.9375rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .div__row {
    max-width: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TextFilter = styled.div`
  font-size: 0.75rem;
  color: ${(props) => (props.$isClicked ? colors.orange : colors.cement_gray)};
  cursor: pointer;
`;

export const CommentItemContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 0.05rem solid ${colors.cement_gray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  color: ${colors.white};
  caret-color: transparent;

  .comments__item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .div__column {
    display: flex;
    flex-direction: column;
    justify-content: start;
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

  .icon__section {
    color: ${colors.white};
  }
`;

export const IconCheckLiked = styled.div`
  color: ${(props) => (props.$isClicked ? '#ff0000' : colors.white)};
`;

export const AddCommentContainer = styled.div`
  display: block;
  padding-top: 3rem;
  padding-right: 1.5rem;
  justify-items: flex-end;

  .comment__wrap {
    max-width: 34.75rem;
    width: 100%;
    padding: 0.625rem 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 0.05rem solid ${colors.cement_gray};
    border-radius: 1.875rem;
  }

  .input__section {
    font-size: 1rem;
    color: ${colors.white};
    background-color: transparent;
    width: 100%;
    outline: none;
    border: none;
  }

  .button__add {
    max-width: 3.4375rem;
    width: 100%;
    min-height: 2.8125rem;
    height: 100%;
    border-radius: 0.625rem;
    background-color: ${colors.space_gray};
    font-size: 1.25rem;
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      transition: 0.3s ease;
      background-color: ${colors.orange};
    }

    &:not(:hover) {
      transition: 0.3s ease-out;
    }
  }

  .button__icon {
    font-size: 1.4rem;
    transform: rotate(90deg);
  }
`;

export const EmptyComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32.5rem;
  caret-color: transparent;

  .line {
    display: flex;
    width: 100%;
    height: 0.05rem;
    background-color: ${colors.cement_gray};
  }
`;

export const AccordionContainer = styled.div`
  display: ${(props) => (props.$isClicked ? 'block' : 'none')};
`;
