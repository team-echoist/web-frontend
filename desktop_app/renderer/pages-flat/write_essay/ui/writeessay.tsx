import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import TitleField from "./contents/TitleField";
import BottomField from "./contents/BottomField";
import { fetchData } from "@/shared/api/fetchData";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { RoundConfirm } from "@/shared/ui/modal";

const Editor = dynamic(
  () => import("@/shared/ui/editor").then((mod) => mod.Editor),
  { ssr: false }
);

const Layout = styled.main`
  margin-top: 32px;
  width: 100vw;
`;
const EditorContainer = styled.div<{ isBottomFieldVisible: boolean }>`
  height: ${({ isBottomFieldVisible }) =>
    isBottomFieldVisible ? "326px" : "auto"};
  transition: height 0.3s ease-in-out;
  .ql-container {
    height: ${({ isBottomFieldVisible }) =>
      isBottomFieldVisible ? "326px" : "auto"};
    display: flex;
    flex-direction: column;
  }

  .ql-editor {
    flex-grow: 1;
    overflow-y: auto;
  }
`;
interface BottomValue {
  active: "tag" | "location";
  tag: {
    values: string[];
  };
  location: {
    values: string[];
  };
}
const defaultId = uuidv4();
export const WriteEssay = () => {
  const [title, setTitle] = useState("제목 없음");
  const [value, setValue] = useState<string>("");
  const [bottomValue, setBottomValue] = useState<BottomValue>({
    active: "tag",
    tag: {
      values: [],
    },
    location: {
      values: [],
    },
  });
  const [imageFile, setImageFile] = useState<File | string | null>(null);
  const [id, setId] = useState<string>(defaultId);
  const isBottomFieldVisible =
    bottomValue.active === "tag" || bottomValue.active === "location";
  const router = useRouter();
  const queryId = router.query.id as string | undefined;
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    const processEssayData = (id: string) => {
      const storedData = JSON.parse(localStorage.getItem("essayData") || "[]");
      const entry = storedData.find((item: any) => item.id === id);
  
      if (entry) {
        setTitle(entry.title);
        setValue(entry.value);
        setBottomValue(entry.bottomValue);
      }
    };
  
    if (queryId) {
      processEssayData(queryId);
      localStorage.setItem("currentEssayId", queryId);
    } else {
      const savedId = localStorage.getItem("currentEssayId");
      if (savedId) {
        processEssayData(savedId);
      }
    }
  
  }, [queryId]);

  useEffect(() => {
    if (id) {
      localStorage.setItem("currentEssayId", id);
    }
  }, [id]);

  const saveToLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem("essayData") || "[]");

    const existingEntryIndex = storedData.findIndex(
      (item: any) => item.id === id
    );

    const newData = {
      id,
      title,
      value,
      bottomValue,
      timestamp: new Date().toISOString(),
    };

    if (existingEntryIndex > -1) {
      storedData[existingEntryIndex] = { ...newData };
    } else {
      storedData.push(newData);
    }

    localStorage.setItem("essayData", JSON.stringify(storedData));
  };

  useEffect(() => {
    if (id) {
      saveToLocalStorage();

      const interval = setInterval(saveToLocalStorage, 30000);

      return () => clearInterval(interval);
    }
  }, [id, title, value, bottomValue]);

  const handlecancle = () => {
    setIsCancel(!isCancel);
  };
  const handleSave = () =>{
    saveToLocalStorage();
    router.push("/web/main")
  }

  return (
    <Layout>
      {isCancel && (
        <RoundConfirm
          title="지금 취소하면 모든 내용이 삭제됩니다."
          cancelText="작성취소"
          saveText="임시저장"
          onCancle={handlecancle}
          onSave={handleSave}
        />
      )}

      <TitleField
        title={title}
        setTitle={setTitle}
        handlecancle={handlecancle}
      />
      <EditorContainer isBottomFieldVisible={isBottomFieldVisible}>
        <Editor
          value={value}
          setValue={setValue}
          tagValue={bottomValue}
          setTagValue={setBottomValue}
          setImageFile={setImageFile}
          id={id}
        />
      </EditorContainer>
      {isBottomFieldVisible && (
        <BottomField
          bottomValue={bottomValue}
          setBottomValue={setBottomValue}
        />
      )}
    </Layout>
  );
};
