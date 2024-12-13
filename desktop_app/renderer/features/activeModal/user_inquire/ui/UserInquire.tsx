import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuDefaultLayout from "../../ui/MenuDefaultLayout";
import { getInquires } from "@/shared/api/surpport";
import List from "./contents/List";
import Inquire from "./contents/Inquire";

function UserInquire({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  const [isShowInquire, setIsShowInquire] = useState(false);
  const [inquireList, setInquireList] = useState([]);

  useEffect(() => {
    fetchInquireList();
  }, [isShowInquire]);
  const fetchInquireList = async () => {
    try {
      const { data, status } = await getInquires();
      if (status === 200 || status === 201) {
        setInquireList(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleShowInquire = () => {
    setIsShowInquire((prev) => !prev);
  };
  return (
    <MenuDefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="inquire"
    >
      {isShowInquire ? (
        <Inquire handleShowInquire={handleShowInquire} />
      ) : (
        <List handleShowInquire={handleShowInquire} inquireList={inquireList}/>
      )}
    </MenuDefaultLayout>
  );
}

export default UserInquire;
