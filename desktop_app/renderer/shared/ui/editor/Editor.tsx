import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";
import SelectText from "./SelectText";
import CustomToolBar from "./CustomToolbar";

const EditorDiv = styled.div`
  position: relative;
  .ql-snow .ql-editor strong {
    font-weight: bold !important;
  }
  .ql-toolbar {
    background: #1d1d1d !important;
    border: none;
  }
  .ql-bold::before,
  .ql-underline::before,
  .ql-strike::before {
    content: none;
  }

  .ql-editor {
    padding: 72px 147px;
  }

  .ql-editor.ql-blank::before {
    color: #686868;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    padding: 0 147px;
  }

  .ql-container.ql-snow {
    border: none !important;
  }
`;

function Editor({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
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
  const handleCustomFontSizeClick = () => {
    setIsModalOpen(true);
  };
  const handleBoldClick = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.format("bold", !quillEditor.getFormat().bold);
    }
  };

  const handleUnderlineClick = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.format("underline", !quillEditor.getFormat().underline);
    }
  };

  const handleStrikeClick = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.format("strike", !quillEditor.getFormat().strike);
    }
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          customFontSize: handleCustomFontSizeClick,
          "custom-bold": handleBoldClick,
          "custom-underline": handleUnderlineClick,
          "custom-strike": handleStrikeClick,
        },
      },
    }),
    []
  );
  const formats = useMemo(() => ["bold", "underline", "strike","size"], []);

  useEffect(() => {
    const quillEditor = quillRef.current?.getEditor();
    if (quillEditor) {
      const toolbar = quillEditor.getModule("toolbar");

      const handleToolbarClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (
          target.classList.contains("ql-custom-bold") ||
          target.classList.contains("ql-custom-underline") ||
          target.classList.contains("ql-custom-strike")
        ) {
          setIsModalOpen(false);
        }
      };

      toolbar.container.addEventListener("click", handleToolbarClick);

      return () => {
        toolbar.container.removeEventListener("click", handleToolbarClick);
      };
    }
  }, []);

  const sizeOptions = ["small", "default", "large", "huge"];

  return (
    <EditorDiv>
      <CustomToolBar isModalOpen={isModalOpen}/>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력하세요"
      />
      {isModalOpen && (
        <SelectText option={sizeOptions} applyFontSize={applyFontSize} />
      )}
    </EditorDiv>
  );
}

const MemoizedEditor = React.memo(Editor);
export default MemoizedEditor;
