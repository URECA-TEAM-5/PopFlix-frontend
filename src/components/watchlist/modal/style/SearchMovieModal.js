import { styled } from 'styled-components';
import { colors } from '../../../../global/globalStyle';

export const DiaglogContent = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    h3 {
        padding: 1rem 0 1rem 0;
    }
`;

export const BtnDiv = styled.div`
    border-top: 0.063rem solid ${colors.white};
    width: 25rem;
    height: 2rem;
    padding: 0.5rem 0 0.7rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`;

export const DiaglogBtn = styled.button`
    width: 5.938rem;
    height: 2.188rem;
    border: none;
    background-color: transparent;
    color: ${colors.cement_gray};
    font-size: 1rem;
    &:hover {
        outline: none;
        color: ${colors.orange};
    }
    &:focus {
        outline: none;
    }
`;