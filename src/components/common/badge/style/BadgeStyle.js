import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const DefaultBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  width: ${(props) => (props.$width ? `${props.$width}rem` : 'auto')};
  height: ${(props) => (props.$height ? `${props.$height}rem` : 'auto')};
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '1rem')};
  color: ${(props) => props.$fontColor && props.$fontColor};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : colors.orange)};
`;

export const OutlineBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 0.08rem solid ${colors.space_gray};
  color: ${(props) => (props.$fontColor ? props.$fontColor : colors.space_gray)};
  width: ${(props) => (props.$width ? `${props.$width}rem` : 'auto')};
  height: ${(props) => (props.$height ? `${props.$height}rem` : 'auto')};
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}rem` : '1rem')};
`;
