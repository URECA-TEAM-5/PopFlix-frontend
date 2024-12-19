import { styled } from 'styled-components';

export const OtherList = styled.div`
    width: 100%;
    height: 18rem;
    h4 {
        padding: 1rem 0;
    }
    .imageContainer {
        display: flex;
        gap: 1rem;
    }
    .imageWrapper {
        width: 7.5rem;
        height: 7.5rem;
        position: relative;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.313rem;
    }
    .imagePlaceholder {
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.313rem;
    }
    .textContainer {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        div {
            width: 7.5rem;
        }
    }
    .title {
        height: 3rem;
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