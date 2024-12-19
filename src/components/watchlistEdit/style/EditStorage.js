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
    padding-top: 1.5rem;
    width: 100%;
    height: 4rem;
    .title {
        font-size: 1.2rem;
    }
    button {
        background-color: ${colors.drak_gray};
        color: ${colors.white};
        width: 2rem;
        height: 2rem;
        font-size: 0.75rem;
        border-radius: 50%;
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
        font-size: 1.1rem;
    }
    .storageImgDiv {
        padding-top: 1rem;
        margin: 0 auto;
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

export const CurrentFileDiv = styled.div`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.313rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .currentImg {
        width: 11.25rem;
        height: 11.25rem;
        object-fit: cover;
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
    justify-content: center;
    padding: 1.5rem 1rem 0 0;
    button {
        width: 8rem;
        height: 2rem;
        background-color: ${colors.orange};
        border-radius: 1.9rem;;
        font-size: 1rem;
        color: ${colors.white};
        border: 0;
        &:focus {
            outline: none;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    background-color: transparent;
    color: ${colors.white};
    box-shadow: none;
    border: 0;
    border-bottom: 0.063rem solid ${colors.space_gray};;
    font-size: 1.1rem;
    text-indent: 3rem;
    &:focus {
        outline: none;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 3rem;
    background-color: transparent;
    color: ${colors.white};
    box-shadow: none;
    border: 0;
    border-bottom: 0.063rem solid ${colors.space_gray};
    font-size: 1.1rem;
    text-indent: 3rem;
    resize: none;
    &:focus {
        outline: none;
    }
`;