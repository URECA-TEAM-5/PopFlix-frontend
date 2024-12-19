import { styled } from 'styled-components';

export const OtherList = styled.div`
    width: 100%;
    h4 {
        padding: 1rem 0;
    }
    .carousel {
        margin-top: 1rem;
        margin: 0 auto;
        width: 95%;
    }
    .imageWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-left: 1rem;
    }
    .image {
        width: 7.5rem;
        height: 7.5rem;
        object-fit: cover;
        border-radius: 0.313rem;
    }
    .imagePlaceholder {
        width: 7.5rem;
        height: 7.5rem;
        background-color: #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.313rem;
    }
    .textWrapper {
        width: 7.5rem;
        margin-top: 0.5rem;
    }
    .title {
        font-size: 0.875rem;
        height: 2.5rem;
    }
    .count {
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