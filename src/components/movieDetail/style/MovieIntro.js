import styled from 'styled-components';
import { colors } from '../../../global/globalStyle';
export const MovieIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  max-width: 53rem;
  max-height: 2.875rem;
`;

export const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 2.375rem;
  gap: 2rem;
  font-size: 0.938rem;
`;

export const GenreContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const GenreButton = styled.button`
  border-color: ${colors.space_gray};
  background-color: ${colors.black};
  color: ${colors.cement_gray};
  width: 80px;
  height: 30px;
  font-size: 14px;
  border-radius: 30px;
  pointer-events: none;
`;

export const MovieImage = styled.img`
  width: 195px;
  height: 250px;
`;

export const MovieOverview = styled.div`
  width: 100%;
`;
