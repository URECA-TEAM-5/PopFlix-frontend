import { DiaglogContent, ErrorDiv, InputLength, InputText, InputTextArea } from "./style/NewListModal";

const NewListInput = ({ storage_name, storage_info, handleChange, error, NAME_MAX_LENGTH, INFO_MAX_LENGTH }) => {

    return (
        <DiaglogContent>
            <h3>WatchList 폴더를 생성해주세요.</h3>
            <ErrorDiv>
                {error && <span className="bold">{error}</span>}
            </ErrorDiv>
            <InputText
                className="regular"
                id="name"
                name="storage_name"
                maxLength={NAME_MAX_LENGTH}
                type="text"
                placeholder="제목을 입력해주세요"
                value={storage_name}
                onChange={handleChange}
            />
            <InputLength>
                <span>{storage_name.length}</span>
                <span>/{NAME_MAX_LENGTH}자</span>
            </InputLength>
            <InputTextArea
                className="regular"
                id="storage_info"
                name="storage_info"
                maxLength={INFO_MAX_LENGTH}
                placeholder="소개글을 입력해주세요"
                value={storage_info}
                onChange={handleChange}
                type="text"
            />
            <InputLength>
                <span>{storage_info.length}</span>
                <span>/{INFO_MAX_LENGTH}자</span>
            </InputLength>
        </DiaglogContent>
    );
};

export default NewListInput;