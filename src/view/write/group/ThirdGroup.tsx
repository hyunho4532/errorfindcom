import {useEffect, useState} from "react";

function ThirdGroup() {

    const FileUpload = () => {
        const [fileContent, setFileContent] = useState<any>('');

        const handleFileUpload = (event: any) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const content = reader.result;
                setFileContent(content);
            }

            reader.readAsText(file);
        }

        useEffect(() => {
            console.log(fileContent)
        }, [fileContent]);

        return (
            <div className="error-write-board-component-third-group">
                <h2 className="error-write-board-component-file">3. 로그 파일을 올려주세요 (* 내용 출력 *) 😌😌</h2>
                <form>
                    <input
                        className="file-input"
                        type="file"
                        name="file"
                        onChange={handleFileUpload}
                    />
                </form>
            </div>
        );
    }

    return <FileUpload />
}

export default ThirdGroup;
