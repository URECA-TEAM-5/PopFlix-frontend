import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const DiaglogContent = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    h3 {
        text-align: center;
        padding: 1rem 0 0.5rem 0;
    }
`;

export const ErrorDiv = styled.div`
    text-align: center;
    height: 1rem;
    padding-bottom: 1rem;
    span {
        color: ${colors.orange};
        font-size: 0.8rem;
        padding-bottom: 1rem;
    }
`;

export const InputText = styled.input`
    width: 20.625rem;
    height: 1rem;
    border-width: 0 0 0.063rem;
    background-color: transparent;
    color: ${colors.white};
    font-size: 0.875rem;
    line-height: 1rem;
    margin: 0 auto;
    &:focus {
        outline: none;
    }
`;

export const InputTextArea = styled.textarea`
    width: 20.625rem;
    height: 5rem;
    resize: none;
    background-color: transparent;
    border: 0;
    color: ${colors.white};
    font-size: 0.875rem;
    margin: 0 auto;
    &:focus {
        outline: none;
    }
`;

export const InputLength = styled.span`
    font-size: 0.65rem;
    text-align: right;
    padding: 0.1rem 3rem 0.5rem 0;
    color: ${colors.cement_gray};
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