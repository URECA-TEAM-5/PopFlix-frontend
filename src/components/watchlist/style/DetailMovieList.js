import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const MovieListTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    p {
        cursor: pointer;
        &:hover {
            color: ${colors.orange};
        }
    }
    .editButton {
        width: 3rem;
        height: 1.3rem;
        background-color: ${colors.orange};
        color: ${colors.white};
        font-size: 0.938rem;
    }
`;

export const MovieList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    img {
        width: 4.5rem;
        height: 4.5rem;
        object-fit: cover;
        border-radius: 0.313rem;
    }
    .contentLine {
        border-top: 0.063rem solid ${colors.cement_gray};
        margin: 1.5rem auto;
        width: 100%;
    }
`;

export const MovieItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    span {
        flex: 1;
        text-align: center;
        padding: 0 0.5rem;
        font-size: 0.938rem;
    }
    .pointSpan {
        cursor: pointer;
        &:hover {
            color: ${colors.orange}
        }
    }
    .title {
        flex: 1;
        text-align: left;
        padding-left: 1rem;
        word-wrap: break-word;
    }
`;

export const EditBtn = styled.button`
    background-color: transparent;
    color: ${colors.orange};
`;