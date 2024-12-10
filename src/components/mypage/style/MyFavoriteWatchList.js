import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const TitleDiv = styled.div`
    width: 100%;
    padding: 1rem 0;
`;

export const NullDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    button {
        width: 4.5rem;
        border: none;
        outline: none;
        background-color: ${colors.navy_gray} ;
        color: ${colors.orange};
        cursor: pointer;
        font-size: 0.938rem;
    }
`;

export const Contatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    position: relative;
    overflow: hidden;
`;

export const WatchListItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
`;

export const WatchListItem = styled.div`
    background-color: ${colors.navy_gray};
    border-radius: 0.313rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 50%;
    .none {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: ${colors.orange};
            cursor: pointer;
        }
    }
    h4 {
        padding-top: 0.2rem;
    }
    div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .gapSpan {
        font-size: 0.938rem;
    }
`;

export const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding-top: 1rem;
    width: 100%;
`;

export const MovieImage = styled.img`
    width: 3.75rem;
    height: 3.75rem;
    object-fit: cover;
    border-radius: 0.313rem;
`;

export const Movie = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    font-size: 0.875rem;
`;

export const CarouselButton = styled.button`
    font-size: 0.875rem;
    cursor: pointer;
    background-color: ${colors.orange};
    color: white;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 1.3rem;
    height: 1.3rem;
    &:focus {
        outline: none;
    }
    &.prev {
        left: 0.625rem;
    }
    &.next {
        right: 0.625rem;
    }
`;