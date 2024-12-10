import NewFolderCount from "./NewFolderCount";
import { DiaglogContent, ErrorDiv, InputText, InputTextArea } from "./style/NewFolderModal";

const NewFolderInput = ({ storageNameRef, storageOverviewRef, error, NAME_MAX_LENGTH, OVERVIEW_MAX_LENGTH, handleInput, storageNameLength, storageOverviewLength }) => {
    return (
        <DiaglogContent>
            <h3>WatchList 폴더를 생성해주세요.</h3>
            <ErrorDiv>
                {error && <span className="bold">{error}</span>}
            </ErrorDiv>
            <InputText
                className="regular"
                id="name"
                name="storageName"
                maxLength={NAME_MAX_LENGTH}
                type="text"
                placeholder="제목을 입력해주세요"
                ref={storageNameRef}
                onInput={handleInput}
            />
            <NewFolderCount length={storageNameLength} maxLength={NAME_MAX_LENGTH} />
            <InputTextArea
                className="regular"
                id="storageOverview"
                name="storageOverview"
                maxLength={OVERVIEW_MAX_LENGTH}
                type="text"
                placeholder="소개글을 입력해주세요"
                ref={storageOverviewRef}
                onInput={handleInput}
            />
            <NewFolderCount length={storageOverviewLength} maxLength={OVERVIEW_MAX_LENGTH} />
        </DiaglogContent>
    );
};

export default NewFolderInput;