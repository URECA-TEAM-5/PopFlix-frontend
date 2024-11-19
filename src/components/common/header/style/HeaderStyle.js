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
  caret-color: transparent;

  .img__logo {
    width: 7.25rem;
    height: 4.68rem;
    cursor: pointer;
  }

  .header__menu {
    width: 31.875rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
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
