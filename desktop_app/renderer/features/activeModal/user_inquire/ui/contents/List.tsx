import React, { useState } from "react";
import { NoneContents } from "@/shared/ui/layout";
import color from "@/shared/styles/color";
import { Button } from "@/shared/ui/button";
import styled from "styled-components";
import { formatDate } from "@/shared/lib/date";
import ResponseIcon from "@/shared/assets/img/response_icon.svg";
import { getInquireDetails } from "@/shared/api/surpport";

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
  margin-bottom: 20px;
`;
const BtnDiv = styled.div`
  position: absolute;
  bottom: 51px;
`;
const NoneContentDiv = styled.div`
  width: 93%;
`;
const ListDiv = styled.div`
  width: 688px;
  padding: 22px 40px;
  display: flex;
  flex-direction: column;
  height: 636px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const SubTitle = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const InquireDiv = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 20px 20px 20px 0px;
  flex-direction: column;
  gap: 6px;
  position: relative;
  cursor: pointer;
  background: #111;
`;
const InquireTitle = styled.span`
  color: ${color.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Date = styled.time`
  color: #4d4d4d;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const StatusChip = styled.div<{ processed: boolean }>`
  color: ${({ processed }) => (processed ? color.pointcolor : color.red)};
  padding: 3px 14px;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border-radius: 42px;
  background: #191919;
  width: 63px;
  height: 24px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 27px;
`;
const ResponseDiv = styled.div`
  padding: 10px 20px 20px 40px;
  display: flex;
`;
const ResponseIconDiv = styled.div``;
const ResponseText = styled.p`
  color: ${color.pointcolor};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 10px;
  word-wrap: break-word;
`;

function List({
  handleShowInquire,
  inquireList,
}: {
  handleShowInquire: () => void;
  inquireList: any[];
}) {
  const [responseData, setResponseData] = useState<any>({});
  const [isShowResponseId, setIsShowResponseId] = useState<null | number>(null);

  const fetchInquireDetails = async (id: number) => {
    if (isShowResponseId) {
      return setIsShowResponseId(null);
    }
    try {
      const { data, status } = await getInquireDetails(id);
      if (status === 200 || status === 201) {
        setResponseData(data);
        setIsShowResponseId(id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <H1>링크드아웃 고객센터</H1>
      {inquireList.length > 0 ? (
        <ListDiv>
          <SubTitle>1:1 문의 내역</SubTitle>
          {inquireList.map((data) => (
            <>
              <InquireDiv
                onClick={() => {
                  fetchInquireDetails(data.id);
                }}
              >
                <InquireTitle>{data.title}</InquireTitle>
                <Date>{formatDate(data.createdDate)} 문의</Date>
                <StatusChip processed={data.processed}>
                  {data.processed ? "답변 완료" : "답변 대기"}
                </StatusChip>
              </InquireDiv>
              {isShowResponseId === data.id && data.processed===true && (
                <ResponseDiv>
                  <ResponseIconDiv>
                    <ResponseIcon />
                  </ResponseIconDiv>
                  <ResponseText>{responseData.answer}</ResponseText>
                </ResponseDiv>
              )}
            </>
          ))}
        </ListDiv>
      ) : (
        <NoneContentDiv>
          <NoneContents text="문의 내역이 없습니다." height={716} />
        </NoneContentDiv>
      )}
      <BtnDiv>
        <Button text="1:1 문의하기" scale="max" onClick={handleShowInquire} />
      </BtnDiv>
    </>
  );
}

export default List;
