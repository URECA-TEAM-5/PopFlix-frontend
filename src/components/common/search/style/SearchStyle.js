import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const SearchSection = styled.div`
  display: flex;
  min-width: ${(props) => (props.$width ? `${props.$width}rem` : '10.25rem')};
  width: 100%;
  caret-color: transparent;

  .search__main {
    background-color: ${(props) => props.$bgColor || colors.drak_gray};
    color: ${(props) => props.$fontColor || colors.cement_gray};

    width: 100%;
    height: 1.2rem;
    padding: ${(props) => (props.$padding ? `${props.$padding}rem` : '0.8rem')};
    border: 0.01rem;
    border-radius: 1.9rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .input__section {
    background-color: ${(props) => props.$bgColor || colors.drak_gray};
    color: ${(props) => props.$fontColor || colors.cement_gray};
    font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '1rem')};
    min-width: ${(props) => (props.$width ? `${props.$width < 14 ? props.$width - 3.5 : props.$width - 2}rem` : '10rem')};
    border: none;
  }

  .input__section:focus {
    outline: none;
    caret-color: auto;
  }

  .search__container:hover {
    opacity: 0.7;
    transition: 0.3s ease;
  }

  .search__icon {
    font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '1rem')};
    cursor: pointer;

    &:hover {
      color: ${colors.orange};
      transition: 0.3s ease;
    }
  }
`;
