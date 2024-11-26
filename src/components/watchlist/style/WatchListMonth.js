import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

const color = {
    deepOrange: "#d58400",
    pink: "#f44280",
    deepPink: "#d1336A",
    purple: "#a442f4",
    deepPurple: "#8937cb"
}

export const WatchMonthContainer = styled.div`
    width: 57.5rem;
    height: 26.25rem;
    .title {
        letter-spacing: 0.05rem;
    }
    .box1 {
        width: 18.125rem;
        height: 18.75rem;
        background-color: ${colors.orange};
        border-radius: 0.313rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.938rem;
        div {
            width: 100%;
            height: 14.375rem;
            background-color: ${color.deepOrange};
            border-radius: 0.313rem;
            text-align: left;
            display: flex;
            align-items: center;
        }
        li {
            width: 15.188rem;
            list-style-type: none;
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        p {
            padding: 0.6rem;
        }
        .box__image {
            width: 3.75rem;
            height: 3.75rem;
            object-fit: cover;
            border-radius: 0.313rem;
        }
        span {
            width: 11.438rem;
            margin-left: 0.7rem;
            word-wrap: break-word;
        }
    }
    
    .box2 {
        width: 18.438rem;
        height: 18.75rem;
        background-color: ${color.pink};
        border-radius: 0.313rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.938rem;
        div {
            width: 100%;
            height: 14.375rem;
            background-color: ${color.deepPink};
            border-radius: 0.313rem;
            text-align: left;
            display: flex;
            align-items: center;
        }
        li {
            width: 15.188rem;
            list-style-type: none;
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        p {
            padding: 0.6rem;
        }
        .box__image {
            width: 3.75rem;
            height: 3.75rem;
            object-fit: cover;
            border-radius: 0.313rem;
        }
        span {
            width: 11.438rem;
            margin-left: 0.7rem;
            word-wrap: break-word;
        }
    }
    
    .box3 {
        width: 18.438rem;
        height: 18.75rem;
        background-color: ${color.purple};
        border-radius: 0.313rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.938rem;
        div {
            width: 100%;
            height: 14.375rem;
            background-color: ${color.deepPurple};
            border-radius: 0.313rem;
            text-align: left;
            display: flex;
            align-items: center;
        }
        li {
            width: 15.188rem;
            list-style-type: none;
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        p {
            padding: 0.6rem;
        }
        .box__image {
            width: 3.75rem;
            height: 3.75rem;
            object-fit: cover;
            border-radius: 0.313rem;
        }
        span {
            width: 11.438rem;
            margin-left: 0.7rem;
            word-wrap: break-word;
        }
    }
`
