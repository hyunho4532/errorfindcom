import EditorJS from "@editorjs/editorjs";

const editorJS = new EditorJS({

})

function contentEditor() {
    return (
        <>
            {editorJS}
        </>
    )
}

export default contentEditor