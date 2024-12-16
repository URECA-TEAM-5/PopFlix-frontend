import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.6rem;
    .point {
        cursor: pointer;
    }
`;

export const WatchListContainer = styled.div`
    padding-bottom: 1rem;
`;

export const WatchListItemDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
    padding: 0.625rem;
`;

export const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.2rem;
    width: 7.5rem;
    height: 7.5rem;
`;

export const PosterImage = styled.img`
    width: 3.75rem;
    height: 3.75rem;
    object-fit: cover;
`;

export const Placeholder = styled.div`
    width: 3.75rem;
    height: 3.75rem;
    background-color: ${colors.navy_gray};
`;

export const WatchListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 2rem;
    .itemList {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    .storageName {
        flex: 1;
        text-align: left;
        text-decoration: none;
        color: inherit;
        font-size: 0.938rem;
    }
    button {
        width: 3rem;
        background-color: ${colors.orange};
        color: ${colors.white};
        font-size: 0.875rem;
        pointer-events: none;
    }
    span {
        padding: 0 0.5rem;
        color: ${colors.cement_gray};
        font-size: 0.938rem;
    }
    .linkPoint {
        padding: 0 0.5rem;
        font-size: 0.938rem;
        text-decoration: none;
        color: ${colors.cement_gray};
        cursor: pointer;
    }
    .point {
        cursor: pointer;
        &:hover {
            color: ${colors.orange};
        }
    }
    .disabled {
        pointer-events: none;
        opacity: 0.5;
    }
`;
export const ToggleDiv = styled.div`
    display: flex;
    flex-direction: row;
    input {
        appearance: none;
        position: relative;
        border: max(2px, 0.1em) solid ${colors.cement_gray};
        border-radius: 1.25em;
        width: 2.25em;
        height: 1.25em;
    }
    input::before {
        content: "";
        position: absolute;
        left: 0;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        transform: scale(0.8);
        background-color: ${colors.cement_gray};
        transition: left 250ms linear;
    }
    input:checked {
        background-color: ${colors.orange};
        border-color: ${colors.orange};
    }
    input:checked::before {
        background-color: ${colors.white};
        left: 1em;
    }
`;