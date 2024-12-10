import { styled } from 'styled-components';

export const WatchMonthContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .banner {
        max-width: 100%;
        min-width: 80%;
        padding: 2% 0;
    }
    .title {
        max-width: 100%;
        min-width: 98%;
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
`;