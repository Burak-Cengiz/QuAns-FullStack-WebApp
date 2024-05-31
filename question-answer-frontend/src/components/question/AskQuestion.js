import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill stil dosyasını dahil edin
import "../../css/styles/main/Question/askquestion.css";

const AskQuestion = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini işleyin
    console.log("Editor Content:", editorContent);
  };

  return (
    <div style={{ height: "1000px" }} className="askquestion-main">
      <form onSubmit={handleSubmit}>
        <div className="mb-5 ms-5 fw-bold" >
          <div><h5 className="fs-2">Ask Question</h5></div>
          <div></div>
        </div>
        <div className="form-group askquestion-title-div form-group-border">
          <label className="label-style">Title</label>
          <p className="p-style">Please Be Spesific</p>
          <input type="text" id="title" className="form-control"></input>
        </div>
        <div className="form-group editor-div form-group-border">
          <div className="form-group editor-main ">
            <label htmlFor="editor" className="label-style">Problem Detail</label>
            <p className="p-style">Min 20 characters</p>
            <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              id="editor"
              className="form-control description-editor"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
