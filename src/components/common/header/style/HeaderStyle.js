import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const HeaderContainer = styled.div`
  max-width: 57.5rem;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  caret-color: transparent;

  .img__logo {
    padding-left: 1rem;
    max-width: 7.25rem;
    width: 100%;
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
    justify-content: end;
    align-items: center;
    gap: 1.5rem;
  }

  .icon {
    font-size: 2rem;
    padding: 0 0.2rem;
    color: ${colors.white};

    &:hover {
      color: ${colors.orange};
      transition: 0.3s ease;
    }
  }

  .profile {
    width: 2.875rem;
    height: 2.875rem;
    object-fit: fill;
    overflow: hidden;
    border: 0.05rem solid ${colors.orange};
    border-radius: 30rem;
  }
`;
