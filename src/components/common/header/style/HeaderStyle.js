import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const HeaderContainer = styled.div`
  position: sticky;
  min-width: 51.25rem;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .img__logo {
    width: 7.25rem;
    height: 4.68rem;
    cursor: pointer;
    caret-color: transparent;
  }

  .menu__section {
    max-width: 34.75rem;
    min-width: 17.625rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    caret-color: transparent;
  }

  .header__menu {
    min-width: 24.5625rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 5%;
    align-items: center;
    caret-color: transparent;
  }

  .search__section {
    display: flex;
    justify-content: flex-end;
    max-width: 20.625rem;
    width: 100%;
  }
`;

export const HeaderMenuItem = styled.p`
  display: block;
  width: auto;
  padding: 0.05rem;
  font-size: 1rem;
  cursor: pointer;

  .text {
    color: ${(props) => props.$fontColor || colors.white};
  }

  .text:hover {
    color: ${colors.orange};
    transition: 0.3s ease;
  }
`;

export const IconSection = styled.div`
  max-width: 12.5rem;
  width: 100%;
  min-height: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  .inner__section {
    max-width: 10rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    font-size: 1.8rem;
    color: ${colors.white};

    &:hover {
      color: ${colors.orange};
      transition: 0.3s ease;
    }
  }
`;
