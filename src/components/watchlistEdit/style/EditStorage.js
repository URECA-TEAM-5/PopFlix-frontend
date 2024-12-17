import { styled } from 'styled-components';
import { colors } from '../../../global/globalStyle';

export const ContentLine = styled.div`
    border-top: 0.063rem solid ${colors.cement_gray};
    margin: 1.5rem auto;
    width: 100%;
`;

export const TiTleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    h4 {
        color: ${colors.orange};
    }
    button {
        background-color: ${colors.drak_gray};
        color: ${colors.orange};
        width: 8rem;
        height: 2rem;
        font-size: 0.875rem;
        border-radius: 1.875rem;
        border: 0;
        &:focus {
            outline: none;
        }
    }
`;

export const StorageContent = styled.div`
    width: 100%;
    .semiTitle {
        width: 100%;
    }
    .storageImgDiv {
        width: 11.25rem;
        height: 11.25rem;
        border-radius: 0.313rem;
    }
    .fileInput {
        display: none;
    }
`;

export const InputFileDiv = styled.div`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.313rem;
    background-color: ${colors.cement_gray};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .cameraIcon {
        width: 2.5rem;
    }
`;

export const StorageImage = styled.img`
    width: 11.25rem;
    height: 11.25rem;
    object-fit: cover;
    border-radius: 0.313rem;
`;

export const Blank = styled.div`
    width: 100%;
    height: 0.5rem;
`;

export const BlankGap = styled.div`
    width: 100%;
    height: 1.5rem;
`;

export const EditBtnDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    padding-right: 1rem;
    button {
        width: 3rem;
        background-color: ${colors.orange};
        font-size: 0.875rem;
        color: ${colors.white};
        border: 0;
        &:focus {
            outline: none;
        }
    }
`;

export const Input = styled.input`
    width: 70%;
    height: 1.5rem;
    background-color: transparent;
    border-radius: 0.313rem;
    color: ${colors.white};
    box-shadow: none;
    border: 0.063rem solid ${colors.cement_gray};
    font-size: 0.938rem;
    &:focus {
        outline: none;
    }
`;

export const Textarea = styled.textarea`
    width: 70%;
    height: 3rem;
    background-color: transparent;
    border-radius: 0.313rem;
    color: ${colors.white};
    box-shadow: none;
    border: 0.063rem solid ${colors.cement_gray};
    font-size: 0.938rem;
    resize: none;
    &:focus {
        outline: none;
    }
`;