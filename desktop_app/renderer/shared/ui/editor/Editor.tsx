import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Quill as QuillType } from "react-quill";

// ReactQuill을 동적으로 로드
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
}) as any;

function Editor() {
  const [value, setValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const quillRef = useRef(null);


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
    </>
  );
}

export default Editor;
