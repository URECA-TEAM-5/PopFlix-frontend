import styled from 'styled-components';
import { colors } from '../../../../global/globalStyle';
export const MovieReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const MovieReviewTabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const MovieReviewTab = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.isActive ? `2px solid ${colors.white}` : 'none')};
  color: ${(props) => (props.isActive ? colors.white : colors.cement_gray)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
