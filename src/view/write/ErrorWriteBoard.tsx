import './scss/ErrorWirteBoard.scss';
import '../../component/input/InputBox.scss';
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import ThirdGroup from "./group/ThirdGroup.tsx";
import SecondGroup from "./group/SecondGroup.tsx";
import FirstGroup from "./group/FirstGroup.tsx";

function errorWriteBoard() {

    return (
        <>
            <FirstGroup />

            <SecondGroup />

            <ThirdGroup />

            <div className="error-write-board-component-four-group">
                <h2 className="error-write-board-component-kind">4. 간략하게 어떠한 상황이 발생했나요? 😌😌</h2>
                <form>
                    <input id="input" type="text" placeholder="어떠한 상황이 발생했는지 입력해주세요!" />
                </form>
            </div>

            <div className="error-write-board-component-four-group">
                <h2 className="error-write-board-component-kind">5. 간략하게 에러 내용을 입력해주세요 😌😌</h2>
                <Editor
                    toolbarItems={[
                        ['heading', 'bold', 'italic', 'strike'],
                        ['hr', 'quote'],
                        ['ul', 'ol', 'task', 'indent', 'outdent'],
                        ['table', 'image', 'link'],
                        ['code', 'codeblock']
                    ]}
                    height="500px"
                >
                </Editor>
            </div>

            <div className="error-write-board-component-button">
                <button className="component-button">현재 에러 상황 등록하기!</button>
            </div>
        </>
    )
}

export default errorWriteBoard;