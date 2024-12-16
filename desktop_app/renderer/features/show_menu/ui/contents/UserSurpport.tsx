import React, { useState } from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Arrow from "@/shared/assets/img/menu/right_arrow.svg";
import color from "@/shared/styles/color";
import { UserInquire } from "@/features/activeModal/user_inquire";
import { Notice } from "@/features/activeModal/notice";
import { Modal } from "@/shared/ui/modal";

const Layout = styled.nav`
  width: 93%;
`;
const Ul = styled.ul`
  list-style: none;
  width: 100%;
`;
const Li = styled.li<{ isLinkStyle?: boolean }>`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 20px 25px 20px 48px;
  background: #111;
  margin-left: 32px;
  span {
    border-bottom: ${({ isLinkStyle }) =>
      isLinkStyle ? `1px solid ${color.white}` : "none"};
    cursor: pointer;
  }
`;
const SupportBtn = styled.button`
  all: unset;
  position: fixed;
  right: 28px;
  top: 130px;
  cursor: pointer;
`;
const NoticeBtn = styled.button`
  all: unset;
  position: fixed;
  right: 28px;
  top: 190px;
  cursor: pointer;
`;
const LawBtn = styled.button<{ isRotated?: boolean }>`
  all: unset;
  position: fixed;
  right: 28px;
  top: 255px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Smooth rotation */
  transform: ${({ isRotated }) =>
    isRotated ? "rotate(90deg)" : "rotate(0deg)"};
`;
type TermKey = "service" | "personal" | "location";
function UserSurpport({
  handleCloseComponent,
}: {
  handleCloseComponent: () => void;
}) {
  const [isShowNotice, setIsShowNotice] = useState(false);
  const [isShowInquire, setIsShowInquire] = useState(false);
  const [currentTerm, setCurrentTerm] = useState<TermKey>("service");
  const [iframeModalOpen, setIframeModalOpen] = useState(false);
  const [isShowTerms, setIsShowTerms] = useState(false);

  const submodalHandler = (name: string) => {
    if (name === "notice") {
      setIsShowNotice((prev) => !prev);
    }
    if (name === "inquire") {
      setIsShowInquire((prev) => !prev);
    }
  };
  const termsMapper: Record<TermKey, { title: string; url: string }> = {
    service: {
      title: "서비스 이용 약관",
      url: "https://www.linkedoutapp.com/terms",
    },
    personal: {
      title: "개인정보처리 방침",
      url: "https://www.linkedoutapp.com/privacy-policy",
    },
    location: {
      title: "위치기반서비스 이용 약관",
      url: "https://www.linkedoutapp.com/location-terms",
    },
  };
  const handelIframeModalOpen = () => {
    setIframeModalOpen((prev) => !prev);
  };
  const handleTerms = (key: TermKey) => {
    setCurrentTerm(key);
  };
  return (
    <Layout>
      {isShowNotice && <Notice submodalHandler={submodalHandler} />}
      {isShowInquire && <UserInquire submodalHandler={submodalHandler} />}
      <Header title="고객지원" handleClose={handleCloseComponent} />
      <Ul>
        <Li>
          링크드아웃 고객센터
          <SupportBtn onClick={() => submodalHandler("inquire")}>
            <Arrow />
          </SupportBtn>
        </Li>
        <Li>
          공지사항
          <NoticeBtn onClick={() => submodalHandler("notice")}>
            <Arrow />
          </NoticeBtn>
        </Li>
        <Li>
          법적 고지
          <LawBtn isRotated={isShowTerms}>
            <Arrow onClick={() => setIsShowTerms((prev) => !prev)} />
          </LawBtn>
        </Li>
      </Ul>

      {isShowTerms && (
        <Ul>
          <Li isLinkStyle={true}>
            •
            <span
              onClick={() => {
                handelIframeModalOpen();
                handleTerms("service");
              }}
            >
              이용 약관
            </span>
          </Li>
          <Li
            isLinkStyle={true}
            onClick={() => {
              handelIframeModalOpen();
              handleTerms("personal");
            }}
          >
            • <span>개인정보처리 방침</span>
          </Li>
          <Li isLinkStyle={true}>
            •
            <span
              onClick={() => {
                handelIframeModalOpen();
                handleTerms("location");
              }}
            >
              위치기반서비스 이용 약관
            </span>
          </Li>
        </Ul>
      )}

      <Modal
        title={termsMapper[`${currentTerm}`].title}
        url={termsMapper[`${currentTerm}`].url}
        isModalOpen={iframeModalOpen}
        onClick={handelIframeModalOpen}
      />
    </Layout>
  );
}

export default UserSurpport;
