import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  forwardRef,
  Ref,
  useMemo,
} from "react";
import dynamic from "next/dynamic";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";

// const QuillNoSSRWrapper = dynamic(
//   async () => {
//     const { default: QuillComponent } = await import("react-quill");

//     const Quill = forwardRef<ReactQuill, any>(
//       (props, ref) => <QuillComponent {...props} ref={ref} />
//     );

//     return Quill;
//   },
//   { loading: () => <div>...loading</div>, ssr: false }
// );

const EditorDiv = styled.div`
  position: relative;
  .ql-snow .ql-editor strong {
    font-weight: bold !important;
  }
  .ql-toolbar .ql-formats .ql-customFontSize span {
    color: #fff;
    font-family: Baskervville;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: absolute;
    top: 3px;
    transition: color 0.3s ease;
  }
  .ql-customFontSize span:hover {
    color: #616fed !important;
  }
  .ql-toolbar .ql-bold {
    color: #fff;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    position: absolute;
    top: 0px;
    left: 25px;
    transition: color 0.3s ease;
  }
  .ql-bold span:hover {
    color: #616fed !important;
  }
  .ql-toolbar .ql-underline {
    color: #fff;
    font-family: Baskervville;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-decoration-line: underline;
    position: absolute;
    top: 3px;
    transition: color 0.3s ease;
  }
  .ql-underline span:hover {
    color: #616fed !important;
  }
  .ql-toolbar .ql-strike {
    color: #fff;
    font-family: Baskervville;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    text-decoration-line: strikethrough;
    transition: color 0.3s ease;
  }
  .ql-strike span:hover {
    color: #616fed !important;
  }
`;

function Editor() {
  const [value, setValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const quillRef = useRef<ReactQuill>(null);

  const applyFontSize = (size: string) => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      if (quillEditor) {
        quillEditor.format("size", size);
      }
    }
    setIsModalOpen(false);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["customFontSize"],
          ["bold", "underline", "strike"],
          ["image"],
          [{ align: [] }],
          ["clean"],
        ],
        handlers: {
          customFontSize: () => setIsModalOpen(true),
        },
      },
    }),
    []
  );
  const formats = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const boldButton = document.querySelector(".ql-bold");
        if (boldButton) {
          boldButton.innerHTML = `
            <span>
              B
            </span>
          `;
        }
        const customButton = document.querySelector(".ql-customFontSize");

        if (customButton) {
          customButton.innerHTML = `
            <span>
              T
            </span>
          `;
        }

        const underLineButton = document.querySelector(".ql-underline");
        if (underLineButton) {
          underLineButton.innerHTML = `
            <span>
              U
            </span>
          `;
        }
        const strikeButton = document.querySelector(".ql-strike");
        if (strikeButton) {
          strikeButton.innerHTML = `
            <span>
              S
            </span>
          `;
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    console.log("quillRef.current:", quillRef.current);
  }, [value]);

  const sizeOptions = ["small", "default", "large", "huge"];

  return (
    <EditorDiv>
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
          <h4>Select Font Size</h4>
          <ul style={listStyle}>
            {sizeOptions.map((size) => (
              <li
                key={size}
                style={itemStyle}
                onClick={() => applyFontSize(size === "default" ? "" : size)}
              >
                {size === "default" ? "Default" : size}
              </li>
            ))}
          </ul>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      )}
    </EditorDiv>
  );
}
const modalStyle: React.CSSProperties = {
  position: "absolute",
  top: "100px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "20px",
  zIndex: 1000,
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
  color: "black",
};

const itemStyle: React.CSSProperties = {
  cursor: "pointer",
  padding: "5px 0",
};
const MemoizedEditor = React.memo(Editor);
export default MemoizedEditor;
