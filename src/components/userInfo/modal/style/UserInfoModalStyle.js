import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

/* DefaultImageSelectModal */
export const DefaultImageSelectModalTitle = styled.h2`
  margin: 1.5rem 0rem;
  padding-left: 2.5rem;
  text-align: left;
`;

/* ImageSelectModal */
export const ImageSelectModalButton = styled.p`
  font-size: 1.5rem;
`;

/* MyInfoModal */
export const MyInfoModalUserName = styled.h5`
  color: ${colors.orange};
`;

export const MyInfoModalUserGreet = styled.h6`
  padding-bottom: 0.5rem;
  color: ${colors.black};
`;

export const MyInfoModalButton = styled.p`
  font-size: 0.7rem;
`;

/* WithdrawalModal */
export const WithdrawalModalContent = styled.p`
  color: ${colors.orange};
`;

export const WithdrawalModalButtonHover = styled.div`
  &:hover {
    p {
      color: ${colors.orange};
    }
  }
`;
