import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const TiTleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    .editBtnDiv {
        padding-right: 1rem;
    }
    button {
        width: 3rem;
        background-color: ${colors.orange};
        font-size: 0.875rem;
        color: ${colors.white};
        border: 0;
        &:focus {
            outline: none;
        }
    }
`;

export const MovieDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    padding-top: 1rem;
    .movieImg {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 0.313rem;
        object-fit: cover;
    }
    .centerDiv {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        button {
            border: 0;
            background-color: transparent;
            color: ${colors.cement_gray};
            cursor: pointer;
            font-size: 0.875rem;

            &:focus {
                outline: none;
            }
        }
    }
`;