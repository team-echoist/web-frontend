<<<<<<< HEAD
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const PrevBtn = styled.button`
  width: 24px;
  height: 20.5px;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

function PrevButton({
  path,
  onClick,
}: {
  path?: string;
  onClick?: () => void;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
    router.back();
  };
  return (
    <PrevBtn onClick={onClick ? onClick : handleClick}>
      <PrevButtonImg />
    </PrevBtn>
  );
}

export default PrevButton;
=======
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const PrevBtn = styled.button`
  width: 24px;
  height: 20.5px;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position:fixed;
  top:40px;
  left:40px;
  &:focus {
    outline: none;
  }
`;

function PrevButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <PrevBtn onClick={handleClick}>
      <PrevButtonImg />
    </PrevBtn>

  );
}

export default PrevButton;
>>>>>>> f2a90b250db6c24dbd9167aba682aeba23b6a7a4
