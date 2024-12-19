import { styled } from 'styled-components';

export const WatchListBanner = styled.img`
    max-width: 100%;
    min-width: 80%;
    padding: 2% 0;
    animation: opacity 0.3s ease-out forwards;
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;