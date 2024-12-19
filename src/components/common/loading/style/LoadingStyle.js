import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const LoadingWrapper = styled.div`
  display: block;
  justify-items: center;
  padding: 3rem 0;
  font-size: 0.75rem;
  width: 100%;
  caret-color: transparent;

  .img__loading {
    width: 10rem;
    height: 10rem;
    object-fit: fill;
  }

  h1 {
    animation: fadeIn 1s ease-out forwards;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        color: ${colors.orange};
      }
    }
  }
`;
