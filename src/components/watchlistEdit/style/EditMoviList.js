import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const TiTleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
    height: 3rem;
    font-size: 1.2rem;
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
    text-align: center;
    .movieImg {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 0.313rem;
        object-fit: cover;
    }
    .centerDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        button {
            border: 0;
            background-color: transparent;
            color: ${colors.cement_gray};
            cursor: pointer;
            font-size: 0.8rem;
            &:hover {
                color: ${colors.orange};
            }
            &:focus {
                outline: none;
            }
        }
    }
`;

export const AddMovieDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 2rem;
    .searchDiv {
        width: 25rem;
        padding-bottom: 2rem;
    }
    .addMovieList{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        width: 100%;
        text-align: center;
    }
    .centerDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        button {
            border: 0;
            background-color: transparent;
            color: ${colors.cement_gray};
            cursor: pointer;
            font-size: 1.2rem;
            &:hover {
                color: ${colors.orange};
            }
            &:focus {
                outline: none;
            }
        }
    }
    .addMovieImg {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 0.313rem;
        object-fit: cover;
    }
`;