import Check from "@/shared/ui/check/check";
import styled from "styled-components";
import color from "@/shared/styles/color";

interface CheckItem {
  desc: string;
  checked: boolean;
  required: boolean;
}

interface CheckState {
  allCheck: boolean;
  service: CheckItem;
  personal: CheckItem;
  age: CheckItem;
  marketing: CheckItem;
}

interface CheckFieldProps {
  check: CheckState;
  setCheck: React.Dispatch<React.SetStateAction<CheckState>>;
}
const Layout = styled.section`
  width: 100%;
  position: absolute;
  top: 441px;
`;
const AllCheckDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
`;
const P = styled.p``;
const CheckDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: 34px;
  margin-bottom: 12px;
  p {
    color: ${color.gray};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
  }
`;

function CheckField({ check, setCheck }: CheckFieldProps) {
  const handleAllCheck = () => {
    const newAllCheck = !check.allCheck;

    const updatedCheck = {
      allCheck: newAllCheck,
      service: check.service.required
        ? { ...check.service, checked: newAllCheck }
        : check.service,
      personal: check.personal.required
        ? { ...check.personal, checked: newAllCheck }
        : check.personal,
      age: check.age.required
        ? { ...check.age, checked: newAllCheck }
        : check.age,
      marketing: check.marketing.required
        ? { ...check.marketing, checked: newAllCheck }
        : check.marketing,
    };

    setCheck(updatedCheck);
  };
  const handleIndividualCheck = (key: keyof CheckState) => {
    setCheck((prevCheck) => ({
      ...prevCheck,
      [key]: {
        ...prevCheck[key as keyof Omit<CheckState, "allCheck">],
        checked: !prevCheck[key as keyof Omit<CheckState, "allCheck">].checked,
      },
    }));
  };
  const checkItems = [
    { key: "service", item: check.service },
    { key: "personal", item: check.personal },
    { key: "age", item: check.age },
    { key: "marketing", item: check.marketing },
  ];
  return (
    <Layout>
      <AllCheckDiv onClick={handleAllCheck}>
        <Check check={check.allCheck} setCheck={() => {}} type="circle" />
        <P>전체 동의</P>
      </AllCheckDiv>
      {checkItems.map(({ key, item }) => (
        <CheckDiv key={key}>
          <Check
            check={item.checked}
            setCheck={() => handleIndividualCheck(key as keyof CheckState)}
            type="general"
          />
          <P>{item.desc}</P>
        </CheckDiv>
      ))}
    </Layout>
  );
}

export default CheckField;
