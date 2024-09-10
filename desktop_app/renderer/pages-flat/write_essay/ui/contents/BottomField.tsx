import styled from "styled-components";
import TagField from "./TagField";

const Layout = styled.div`
  padding: 0px 147px;
  background: #121212;
  width: 100%;
  height: 45.34vh;
  position: absolute;
  bottom: 0px;
  z-index:10;
`;

interface optionType {
  bottomValue: {
    active: string;
    tag: {
      values: string[];
    };
    location: {
      values: string[];
    };
  };
}

function BottomField({ bottomValue }: optionType) {
  return (
    <Layout>
      <TagField activeTag={bottomValue.active} />
    </Layout>
  );
}

export default BottomField;
