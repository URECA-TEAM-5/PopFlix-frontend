import { InputLength } from "../style/NewListModal";

const NewListCount = ({ length, maxLength }) => {
    return (
        <InputLength>
            <span>{length}</span>
            <span>/{maxLength}자</span>
        </InputLength>
    );
};

export default NewListCount;