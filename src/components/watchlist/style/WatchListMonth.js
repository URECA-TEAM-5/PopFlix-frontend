import { styled } from 'styled-components';

export const WatchMonthContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 80%;
        padding: 2% 0;
    }
    .title {
        width: 78%;
        text-align: left;
        letter-spacing: 0.01rem;
        padding-bottom: 1.5rem;
    }
`;

export const BoxDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;

    .box {
        width: 25.5%;
        background-color: ${props => props.boxcolor};
        border-radius: 0.313rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.938rem;
    }

    .box div {
        width: 100%;
        background-color: ${props => props.deepcolor};
        border-radius: 0.313rem;
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box ul {
        width: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem 1.5rem;
        margin: 0;
    }

    .box li {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .box p {
        padding: 1rem;
        word-wrap: break-word;
    }

    .box .box__image {
        width: 3.75rem;
        height: 3.75rem;
        object-fit: cover;
        border-radius: 0.313rem;
    }

    .box span {
        width: 73%;
        padding-left: 0.7rem;
        word-wrap: break-word;
    }
`;