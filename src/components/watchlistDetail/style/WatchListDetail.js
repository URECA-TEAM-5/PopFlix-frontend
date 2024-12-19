import { styled } from 'styled-components';

export const OpacityDiv = styled.div`
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