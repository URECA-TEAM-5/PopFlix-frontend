import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const Storage = styled.div`
    min-width: 100%;
    height: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    img {
        width: 11.25rem;
        height: 11.25rem;
        object-fit: cover;
        border-radius: 0.313rem;
    }
    h4 {
        padding: 0.3rem 0;   
    }
    p {
        color: ${colors.cement_gray};
        font-size: 0.938rem;
        padding: 0.3rem 0;
    }
    .content__line {
        border-top: 0.063rem solid ${colors.cement_gray};
        margin: 1.5rem auto;
        width: 100%;
    }
    .overview {
        padding: 1rem 0;
    }
`;

export const StorageInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
        min-width: 70%;
        padding-left: 1rem;
    }
    .share {
        padding-left: 1.5rem;
    }
    .heartlike {
        color: red;
    }
`;