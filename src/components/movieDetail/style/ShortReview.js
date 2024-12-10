import styled from "styled-components"
import { colors } from "../../../global/globalStyle"
export const ShortReviewContainer = styled.div`
display: flex;
flex-direction: column;
`
export const ShortReviewTopContainer = styled.div`
padding: 1rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const ShortReviewCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  min-width: 40rem;
  gap: 16px; /* 카드 간 간격 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  scroll-behavior: smooth; /* 스크롤이 부드럽게 동작 */
  justify-content: flex-start;
  padding: 0 1rem;
`;

export const ShortReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 250px;
  height: 150px;
  /* max-width: 250px;
  max-height: 150px; */
  border: 0.0825rem solid ${colors.cement_gray};
  border-radius: 0.625rem;
  background-color: ${colors.navy_gray};
  @media (max-width: 768px) {
    flex: 0 0 140px; /* 작은 화면에서는 너비를 줄임 */
  }
  @media (max-width: 480px) {
    flex: 0 0 100px; /* 더 작은 화면에서는 더 줄임 */
  }
`;
export const ShortReviewText = styled.p`
display: flex;
/* padding: 1rem; */
width: 90%;
font-size: 15px;
justify-content: center;
`
export const UserName = styled.p`
 width: 90%;
display: flex;
justify-content: flex-end;
padding-top:2rem;
/* padding-right: 1rem; */
color: ${colors.cement_gray};
`
