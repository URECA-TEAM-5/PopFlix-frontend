import { styled } from 'styled-components';

export const OtherList = styled.div`
    width: 100%;
    height: 18rem;
    h4 {
        padding: 1rem 0;
    }
    .imageContainer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 1.5rem;
        img {
            width: 7.5rem;
            height: 7.5rem;
            object-fit: cover;
            border-radius: 0.313rem;
        }
    }
    .textContainer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 1.5rem;
        div {
            width: 7.5rem;
        }
    }
    .title {
        padding: 0.3rem 0;
        font-size: 0.875rem;
        text-align: left;
    }
    .count {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
    }
    .likeCount {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .heartlike {
        color: red;
    }
`;