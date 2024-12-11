import React, { useState, useEffect, useReducer } from "react";
import DefaultLayout from "@/features/activeModal/ui/DefaultLayout";
import styled from "styled-components";
import color from "@/shared/styles/color";
import Check from "@/shared/ui/check/check";
import Cookies from "js-cookie";
import { Button } from "@/shared/ui/button";
import { postWithdraw } from "@/shared/api/user";
import { useRouter } from "next/router";
import { DarkBackground } from "@/shared/ui/background";
import { BottomSheet } from "@/shared/ui/modal";

const H1 = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  left: 48px;
  top: 5px;

`;
const ContentLayout = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.article`
  width: 818px;
  padding: 40px 30px;
`;
const ImportanNote = styled.div`
  width: 100%;
  height: 255px;
  margin-bottom: 68px;
`;
const Reason = styled.div`
  width: 100%;
`;
const Password = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const GrayText = styled.p`
  color: #5d5d5d;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 10px;
`;
const NoteItem = styled.ul`
  width: 100%;
  height: auto;
  background: #0d0d0d;
  margin-top: 23px;
  border-radius: 10px;
  padding: 23px 23px;
`;
const Li = styled.li`
  color: #5d5d5d;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 24px;
  margin-left: 16px;
`;
const Strong = styled.strong`
  color: ${color.red};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const ReasonItemDiv = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  background: #0d0d0d;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 30px;
  position: relative;
`;
const CheckboxItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 54px;
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
const TextAreaDiv = styled.div`
  grid-column: span 2;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const TextArea = styled.textarea`
  border: none;
  outline: none;
  width: 756px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #616fed;
  background-color: ${color.lightBlack};
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  letter-spacing: 0.16px;
  padding: 17px 18px;
  resize: none;
`;
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 30px;
`;
const ModalText = styled.p`
  height: 48px;
  color: ${color.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 49px;
`;
const ModalBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 57px;
`;
function WithDrawModal({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  const [reasonData, setReasonData] = useState([
    {
      title: "사용 빈도가 낮아서",
      checked: false,
    },
    {
      title: "콘텐츠(글)의 질이 기대에 못 미쳐서",
      checked: false,
    },
    {
      title: "앱의 기능 및 서비스가 불만족스러워서",
      checked: false,
    },
    {
      title: "앱 사용 중에 자꾸 문제가 생겨서(버그, 오류 등)",
      checked: false,
    },
    {
      title: "기타 문제",
      checked: false,
    },
    {
      title: "다른 서비스가 더 좋아서",
      checked: false,
    },
  ]);
  const [etcChecked, setEtcChecked] = useState(false);
  const [etcText, setEtcText] = useState("");
  const [isOauth, setIsOauth] = useState<string | null>(null);
  const [isShowWithDrawerConfirm, setShowWithDrawerConfirm] = useState(false);
  const isChecked = reasonData.some((item) => item.checked);
  const router = useRouter();

  useEffect(() => {
    const oauthValue =
      Cookies.get("isOauth") || sessionStorage.getItem("isOauth");
    setIsOauth(oauthValue);
  }, []);

  const handleIndividualCheck = (key: string) => {
    if (key.includes("기타")) {
      setEtcChecked(true);
    } else {
      setEtcChecked(false);
    }

    setReasonData((prev) =>
      prev.map((item) =>
        item.title === key
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      )
    );
  };
  const reasonHandler = async () => {
    const reason = reasonData.filter((item) => item.checked === true)[0];
    let reasonDesc = reason.title.includes("기타") ? etcText : reason.title;
    try {
      const { status } = await postWithdraw(reasonDesc);
      if (status === 200 || status === 201) {
        router.push("/web/login");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleConfirm = () => {
    setShowWithDrawerConfirm((prev) => !prev);
  };

  return (
    <DefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="withdraw"
    >
      {isShowWithDrawerConfirm && (
        <DarkBackground>
          <BottomSheet isOpen={true} size="middle">
            <ModalText>정말 회원 탈퇴를 신청하시겠습니까?</ModalText>
            <ModalBtnContainer>
              <Button
                text="취소"
                scale="small"
                type="disable"
                onClick={handleConfirm}
              />
              <Button
                text="확인"
                scale="small"
                onClick={() => {
                  reasonHandler();
                }}
              />
            </ModalBtnContainer>
          </BottomSheet>
        </DarkBackground>
      )}

      <H1>탈퇴하기</H1>
      <ContentLayout>
        <Wrapper>
          <ImportanNote>
            <Title>탈퇴 시 유의사항</Title>
            <NoteItem>
              <Li>
                회원 탈퇴 시 회원님의 &nbsp;
                <Strong>계정 및 프로필, 모든 글들과 활동 기록이 삭제</Strong>
                됩니다. 삭제된 정보는 어떤 경우에도 복구할 수 없으니 신중하게
                결정해주세요.
              </Li>
              <Li>
                단, 탈퇴 요청 시 <Strong>30일 간의 유예기간</Strong>이
                제공됩니다. 이 기간 동안 계정 복구가 가능하며, 30일 후에는 계정
                및 모든 데이터가 영구적으로 삭제됩니다.
              </Li>
              <Li>
                유예기간 내 재로그인 시 계정을 복구 또는 곧바로 삭제할 수 있는
                선택지가 주어집니다.
              </Li>
            </NoteItem>
          </ImportanNote>
          <Reason>
            <Title>탈퇴 사유</Title>
            <GrayText>
              탈퇴하는 이유를 말씀해주세요. 링크드아웃 서비스 개선에 큰 도움이
              될 것입니다!
            </GrayText>
            <ReasonItemDiv>
              {reasonData.map((data) => {
                return (
                  <CheckboxItemDiv
                    key={data.title}
                    onClick={() => handleIndividualCheck(data.title)}
                  >
                    <Check
                      check={data.checked}
                      type="circle"
                      setCheck={() => {}}
                    />
                    <Span>{data.title}</Span>
                  </CheckboxItemDiv>
                );
              })}
              {etcChecked && (
                <TextAreaDiv>
                  <TextArea
                    value={etcText}
                    onChange={(e) => {
                      setEtcText(e.target.value);
                    }}
                  ></TextArea>
                </TextAreaDiv>
              )}
            </ReasonItemDiv>
          </Reason>
          <BtnDiv>
            <Button
              text="탈퇴하기"
              scale="max"
              type={isChecked ? "red" : "disable"}
              onClick={handleConfirm}
            />
          </BtnDiv>
          {/* {isOauth !== "yes" && (
            <Password>
              <Title>현재 비밀번호</Title>
            </Password>
          )} */}
        </Wrapper>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default WithDrawModal;
