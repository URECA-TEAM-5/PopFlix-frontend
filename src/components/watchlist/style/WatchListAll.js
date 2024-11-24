import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const WatchAllContainer = styled.div`
    width: 50rem;
    margin: 0 auto;

    .pointBtn {
        width: 5rem;
        height: 2.5rem;
        background-color: ${colors.orange};
        color: ${colors.white};
        border-radius: 1.875rem;
        display: flex;
        align-items: center;
        pointer-events: none;
        font-size: 0.9rem;
    }
    .amount {
        font-size: 0.813rem;
    }
    .filter {
        cursor: pointer;
        color: ${colors.cement_gray};
        font-size: 0.813rem;
    }
    .filter:hover {
        color: ${colors.orange};
    }

    .selected {
        color: ${colors.orange};
    }

    .listContainer {
        display: flex;
        justify-content: flex-start;
        padding: 2rem 0;
        width: 100%;
    }
`;

export const WatchListCard = styled.div`
    display: flex;
    width: 22.813rem;
    height: 9.375rem;
    border-radius: 0.313rem;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        transition: box-shadow 0.1s;
        box-shadow: 0 0 0.12rem 0.12rem rgb(132, 134, 141, 0.8);
    }
    &:focus {
        outline: none;
        border-color: ${colors.cement_gray};
    }
    img {
        width: 9.375rem;
        height: 9.375rem;
        border-top-left-radius: 0.313rem;
        border-bottom-left-radius: 0.313rem;
        object-fit: cover;
        padding-right: 0.5rem;
    }
`;

export const CardContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 1rem;
    width: 13.438rem;
    height: 9.375rem;
    span {
        font-size: 0.93rem;
        width: 95%;
        word-break: keep-all;
        padding: 0.2rem 0.23rem;
        }
    .small {
        font-size: 0.8rem;
        padding: 0 0.3rem;
    }
    .likeDiv {
        text-align: right;
        padding: 1rem 0.9rem 0 0;
    }
`;

export const Heart = styled.span`
    color: ${props => (props.$isLiked ? 'red' : 'white')};
`;


export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
`;

export const PageButton = styled.button`
    background-color: transparent;
    color: ${colors.white};
    padding: 0.625rem 0.938rem;
    margin: 0.3rem;
    cursor: pointer;
    border-radius: 0.313rem;
    font-size: 0.8rem;

    &:hover {
        background-color: ${colors.drak_gray};
        border-color: ${colors.cement_gray};
    }

    ${(props) => props.$isSelected &&
        `
        background-color: ${colors.drak_gray};
        color: ${colors.white};
    `}
`;
