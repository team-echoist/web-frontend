import React, { useState } from "react";
import DefaultContents from "./DefaultContents";
import SelectIcon from "./SelectIcon";
import Header from "./Header";
import { useStore } from "@/shared/store";

interface User {
  email?: string;
  nickname?: string;
  password?: string;
  gender?: string;
  profileImage?: string;
  birthDate?: string;
  isFirst?: boolean;
  locationConsent?: boolean;
}

function ModalContents({
  isError,
  editUserInfo,
  setIsError,
}: {
  isError: boolean;
  editUserInfo: (body: User) => void;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const user = useStore((state) => state.user);
  const suffix = "아무개";
  const [nickname, setNickname] = useState(`${user?.nickname || ""}`);
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setIsError(false);
    if (input.endsWith(suffix)) {
      setNickname(input);
    } else {
      setNickname(input);
    }
  };
  const handleEdit = () => {
    setIsProfileEdit(!isProfileEdit);
  };
  return (
    <>
      <Header
        editUserInfo={editUserInfo}
        nickname={nickname}
        isProfileEdit={isProfileEdit}
        handleEdit={handleEdit}
      />
      {isProfileEdit ? (
        <SelectIcon />
      ) : (
        <DefaultContents
          isError={isError}
          handleChange={handleChange}
          nickname={nickname}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
}

export default ModalContents;
