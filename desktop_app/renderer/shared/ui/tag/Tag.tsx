import styled from "styled-components";
import color from "@/shared/styles/color";
import CloseBtn from "@/shared/assets/img/white_close.svg";

const Layout = styled.div`
  border-radius: 65px;
  background: ${color.pointcolor};
  display: inline-flex;
  padding: 2px 12px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  height: 32px;
  width: auto;
  min-width: 78px;
  svg{
  cursor: pointer;
  }
`;

function Tag() {
  return (
    <Layout>
      깨달음
      <CloseBtn />
    </Layout>
  );
}

export default Tag;
