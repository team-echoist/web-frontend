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
    overflow-y: auto;
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

const sizeMap = {
  small: "10px",
  default: "13px", 
  large: "18px",
  huge: "32px",
};

const SizeStyle = Quill.import("attributors/style/size");
SizeStyle.whitelist = Object.values(sizeMap);
Quill.register(SizeStyle, true);
interface TagValue {
  active: string;
  tag: {
    values: string[];
  };
  location: {
    values: string[];
  };
}

function Editor({
  value,
  setValue,
  tagValue,
  setTagValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  tagValue: TagValue;
  setTagValue: Dispatch<SetStateAction<TagValue>>;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const quillRef = useRef<ReactQuill>(null);

  const applyFontSize = (size: keyof typeof sizeMap) => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      if (quillEditor) {
        quillEditor.format("size", sizeMap[size]);
      }
    }
  };
  const handleCustomFontSizeClick = () => {
    setIsModalOpen(true);
  };
  const handleBoldClick = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.format("bold", !quillEditor.getFormat().bold);
      setIsModalOpen(false);
    }
  };

  const handleUnderlineClick = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.format("underline", !quillEditor.getFormat().underline);
      setIsModalOpen(false);
    }
  };

  const handleStrikeClick = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      quillEditor.format("strike", !quillEditor.getFormat().strike);
      setIsModalOpen(false);
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
  const formats = useMemo(() => ["bold", "underline", "strike", "size"], []);

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

  const tagHandler = (name: string) => {
    setTagValue((prevState: TagValue) => ({
      ...prevState,
      active: name === "tag" || name === "location" ? name : prevState.active,
    }));
  };
  console.log("value",value)
  return (
    <EditorDiv>
      <CustomToolBar isModalOpen={isModalOpen} tagName={tagValue.active} tagHandler={tagHandler}/>
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
