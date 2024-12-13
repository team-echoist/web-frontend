import React, { useState, MouseEvent, ChangeEvent } from "react";
import styled from "styled-components";
import color from "@/shared/styles/color";
import Check from "@/shared/ui/check/check";
import ConfirmIcon from "@/shared/assets/img/confirm_icon.svg";
import { Tooltip } from "@/shared/ui/tooltip";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { ColorToast } from "@/shared/ui/toast";
import { postInquire } from "@/shared/api/surpport";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  left: 48px;
  top: 3px;
`;
const Layout = styled.div`
  width: 96%;
  padding: 46px 45px;
`;
const InquiryType = styled.div`
  width: 100%;
`;
const Title = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const CheckItemDiv = styled.div`
  width: 708px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
const Span = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: 0.18px;
`;
const CheckItem = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 10px;
  position: relative;
  svg {
    cursor: pointer;
  }
`;
const TootipDiv = styled.div`
  width: 100%;
  position: absolute;
  left: 90%;
  top: 25px;
`;
const TitleInputDiv = styled.div`
  width: 100%;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 0;
`;
const TextAreaDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 0;
`;
const TextArea = styled.textarea<{
  hasError?: boolean;
  hasValue?: boolean;
  width?: number;
}>`
  all: unset;
  border-radius: 10px;
  background: #252525;
  width: ${({ width }) => (width ? `${width}px` : "708px")};
  height: 200px;
  flex-shrink: 0;
  box-sizing: border-box;
  border: ${(props) =>
    props.hasError
      ? "2px solid #E43446"
      : props.hasValue
      ? `1px solid ${color.pointcolor}`
      : "none"};
  color: ${color.white};
  padding: 17px 17px;
  &:focus {
    border: 1px solid ${color.pointcolor};
    outline: none;
  }
`;
const BtnDiv = styled.div`
  width: 708px;
  display: flex;
  justify-content: center;
  gap: 7.9px;
  margin-top: 24px;
`;
const ToastContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 43%;
  z-index: 50;
`;
const tooltipData = [
  "앱 사용법",
  "버그 신고",
  "업데이트 문제",
  "로그인 문제",
  "동기화 문제 등",
];
function Inquire({ handleShowInquire }: { handleShowInquire: () => void }) {
  const [reasonData, setReasonData] = useState([
    {
      title: "기술 지원 관련",
      checked: false,
      isShowTooltip: false,
      tooltipRequired: true,
    },
    {
      title: "계정 및 결제",
      checked: false,
      tooltipRequired: false,
    },
    {
      title: "콘텐츠 관련",
      checked: false,
      tooltipRequired: false,
    },
    {
      title: "기능 요청 및 제안",
      checked: false,
      tooltipRequired: false,
    },
    {
      title: "기타",
      checked: false,
      tooltipRequired: false,
    },
  ]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [isError, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleIndividualCheck = (key: string) => {
    setReasonData((prev) =>
      prev.map((item) =>
        item.title === key
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      )
    );
  };
  const handleShowTooltip = () => {
    setReasonData((prev) =>
      prev.map((item) => ({
        ...item,
        isShowTooltip: !item.isShowTooltip,
      }))
    );
  };
  const toastHandler = (text: string, isError: boolean) => {
    setIsShowToast(true);
    setToastText(text);
    setError(isError);
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const submitInquire = async () => {
    const checkedTitles = reasonData
      .filter((item) => item.checked)
      .map((item) => item.title)[0];
    if (title.length === 0 || desc.length === 0 || checkedTitles === undefined) {
      return toastHandler("내용을 전부 입력해주세요.", true);
    }
    try {
      const { status } = await postInquire(title, desc, checkedTitles);
      if (status === 201 || status === 201) {
        toastHandler("1:1 문의 등록이 완료 되었습니다.",false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <H1>1:1 문의하기</H1>
      <ToastContainer>
        <ColorToast
          text={toastText}
          onClose={() => {
            setIsShowToast(false);
          }}
          isShowToast={isShowToast}
          type={isError ? "alert" : "normal"}
        />
      </ToastContainer>
      <Layout>
        <InquiryType>
          <Title>*문의 유형</Title>
          <CheckItemDiv>
            {reasonData.map((data) => {
              return (
                <CheckItem
                  key={data.title}
                  onClick={() => handleIndividualCheck(data.title)}
                >
                  <Check
                    check={data.checked}
                    type="circle"
                    setCheck={() => {}}
                  />
                  <Span>{data.title}</Span>
                  {data.tooltipRequired && (
                    <ConfirmIcon
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        handleShowTooltip();
                      }}
                    />
                  )}
                  {data.isShowTooltip && data.tooltipRequired && (
                    <TootipDiv onClick={(e: MouseEvent) => e.stopPropagation()}>
                      <Tooltip
                        data={tooltipData}
                        title="*기술 지원 관련 이란?"
                        width="195px"
                        height="245px"
                      />
                    </TootipDiv>
                  )}
                </CheckItem>
              );
            })}
          </CheckItemDiv>
        </InquiryType>
        <TitleInputDiv>
          <Title>* 제목</Title>
          <Input
            placeholder="제목을 입력해주세요."
            name="inquire_title"
            width={708}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
          />
        </TitleInputDiv>
        <TextAreaDiv>
          <Title>* 문의 내용</Title>
          <TextArea
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="접수된 문의를 순차적으로 답변 드리고 있습니다. 문의 내용을 상세히 기재해 주실수록 정확한 답변이 가능합니다."
          />
        </TextAreaDiv>
        <BtnDiv>
          <Button
            text="취소"
            type="disable"
            scale="small"
            onClick={handleShowInquire}
          />
          <Button
            text="등록"
            scale="small"
            onClick={() => {
              submitInquire();
            }}
          />
        </BtnDiv>
      </Layout>
    </>
  );
}

export default Inquire;
