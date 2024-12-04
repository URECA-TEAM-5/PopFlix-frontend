import NewFolderCount from "./NewFolderCount";
import { DiaglogContent, ErrorDiv, InputText, InputTextArea } from "../style/NewFolderModal";

const NewFolderInput = ({ storageNameRef, storageInfoRef, error, NAME_MAX_LENGTH, INFO_MAX_LENGTH, handleInput, storageNameLength, storageInfoLength }) => {
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
                ref={storageNameRef}
                onInput={handleInput}
            />
            <NewFolderCount length={storageNameLength} maxLength={NAME_MAX_LENGTH} />
            <InputTextArea
                className="regular"
                id="storage_info"
                name="storage_info"
                maxLength={INFO_MAX_LENGTH}
                type="text"
                placeholder="소개글을 입력해주세요"
                ref={storageInfoRef}
                onInput={handleInput}
            />
            <NewFolderCount length={storageInfoLength} maxLength={INFO_MAX_LENGTH} />
        </DiaglogContent>
    );
};

export default NewFolderInput;