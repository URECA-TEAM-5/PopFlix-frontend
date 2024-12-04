import { InputLength } from "../style/NewFolderModal";

const NewFolderCount = ({ length, maxLength }) => {
    return (
        <InputLength>
            <span>{length}</span>
            <span>/{maxLength}자</span>
        </InputLength>
    );
};

export default NewFolderCount;