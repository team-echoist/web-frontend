import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Quill } from "react-quill";


const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
}) as any; 

function Editor() {
  const [value, setValue] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const quillRef = useRef<typeof Quill | null>(null);

  const applyFormat = (format: string) => {
    const quillEditor = quillRef.current?.getEditor();
    if (quillEditor) {
      if (format === "header1") {
        quillEditor.format("header", 1); 
      } else if (format === "header2") {
        quillEditor.format("header", 2); 
      }
    }
    setIsModalOpen(false); 
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "image",
  ];

  useEffect(() => {
    const Quill = require("quill");
    const icons = Quill.import("ui/icons");

    icons["customText"] = `
      <span style="
        color: #FFF;
        font-family: Baskervville;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      ">
        T
      </span>
    `;
  }, []);

  return (
    <>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Start typing..."
      />
      {isModalOpen && (
        <div style={modalStyle}>
          <button onClick={() => applyFormat("header1")}>Heading 1</button>
          <button onClick={() => applyFormat("header2")}>Heading 2</button>
        </div>
      )}
    </>
  );
}

const modalStyle: React.CSSProperties = {
  position: "absolute",
  top: "50px",
  left: "50px",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "10px",
  zIndex: 100,
};

export default Editor;