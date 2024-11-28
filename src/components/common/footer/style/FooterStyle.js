import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const FooterConatiner = styled.div`
  width: 100%;
  height: 9.7rem;
  line-height: 1.2;
  margin-top: 3rem;
  padding: 3rem 0;
  border-top: 0.05rem solid ${colors.space_gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  caret-color: transparent;

  .inner__section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
  }

  .info__section {
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
  }

  .info__top {
    color: ${colors.white};
    font-size: 0.875rem;
  }

  .info__mid {
    padding: 0.5rem 0;
  }

  .div__row {
    display: flex;
    flex-direction: row;
    color: ${colors.cement_gray};
  }

  .info__left {
    width: 8.75rem;
  }

  .img {
    width: 3rem;
    height: 2rem;
  }

  .text__bottom {
    padding: 0.3rem 0.5rem;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  padding-right: 1.2rem;
  align-items: end;
  gap: 1.5rem;

  .icon {
    width: 1.5rem;
  }
`;
