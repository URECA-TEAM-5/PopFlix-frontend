import styled from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const PoppleTipContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PoppleText = styled.div`
  font-size: 1rem;
  display: flex;
  color: white;
  padding: 1rem;
  flex-direction: column;
`;

export const PoppleCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  gap: 1rem;
`;

export const PoppleCard = styled.div`
  background-color: ${colors.navy_gray};
  border: 0.0825rem solid ${colors.cement_gray};
  border-radius: 0.625rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

export const PoppleIcon = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
