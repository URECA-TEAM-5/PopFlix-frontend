import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const FooterConatiner = styled.div`
  max-width: 57.5rem;
  width: 100%;
  height: 9.7rem;
  line-height: 1.2;
  margin-top: 3rem;
  padding: 3rem 0;
  border-top: 0.05rem solid ${colors.space_gray};
  display: block;
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
  }

  .info__wrap {
    padding: 0 1rem;
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
  max-width: 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  gap: 1rem;

  .icon {
    max-width: 1.5rem;
  }
`;
