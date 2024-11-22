import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const HeaderContainer = styled.div`
  position: sticky;
  width: 75rem;
  height: 5rem;
  padding: 0 2.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  .img__logo {
    width: 7.25rem;
    height: 4.68rem;
    cursor: pointer;
    caret-color: transparent;
  }

  .header__menu {
    width: 31.875rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
    caret-color: transparent;
  }
`;

export const HeaderMenuItem = styled.p`
  width: auto;
  padding: 0.05rem;
  font-size: 1rem;
  color: ${(props) => props.$fontColor};
  cursor: pointer;

  &:hover {
    color: ${colors.orange};
    transition: 0.3s ease;
  }
`;

export const IconSection = styled.div`
  width: 16.56rem;
  height: 1.2rem;
  gap: 1.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 1.4rem;
    color: ${colors.white};

    &:hover {
      color: ${colors.orange};
      transition: 0.3s ease;
    }
  }
`;
