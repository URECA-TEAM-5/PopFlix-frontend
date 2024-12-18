import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const WatchMonthContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .banner {
        width: 100%;
        padding: 2% 0;
    }
    .title {
        width: 100%;
        text-align: left;
        letter-spacing: 0.01rem;
        padding-bottom: 1.5rem;
    }
    .boxUl {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem 1.5rem;
        margin: 0;
    }
    .boxLi {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.3rem 0;
    }
    @keyframes slideIn {
        0% {
            transform: translateY(-10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .boxLi {
        animation: slideIn 0.5s ease-out forwards;
        opacity: 0;
    }
    .boxUl li:nth-child(1) {
        animation-delay: 0.2s;
    }
    .boxUl li:nth-child(2) {
        animation-delay: 0.3s;
    }
    .boxUl li:nth-child(3) {
        animation-delay: 0.4s;
    }
    .boxP {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        font: 0.938rem;
        padding: 1.2rem 1.5rem 1rem 1.5rem;
        text-align: center;
        word-wrap: break-word;
    }
    .boxImage {
        width: 3.75rem;
        height: 3.75rem;
        object-fit: cover;
        border-radius: 0.313rem;
    }
    .boxSpan {
        width: 73%;
        padding-left: 0.7rem;
        word-wrap: break-word;
    }
    .linkMovie {
        color: ${colors.white};
        cursor: pointer;
    }
    .linkMovie:hover {
        font-size: 1.02rem;
        transition-duration: 0.4s;
    }
    .linkStorage {
        color: ${colors.white};
        cursor: pointer;
    }
    .linkStorage:hover {
        font-size: 1.01rem;
        transition-duration: 0.5s;
    }
`;

export const ErrorDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        color: ${colors.cement_gray};
    }
    img {
        width: 5rem;
        object-fit: cover;
    }
`;