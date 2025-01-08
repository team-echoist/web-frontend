import React from "react";

function GeneralButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  // 버튼 스타일 정의
  const baseStyles =
    "flex px-[18px] py-[18px] items-center gap-[4.975px] shrink-0 rounded-lg font-medium text-center focus:outline-none transition cursor-pointer z-10";
  const variants = {
    primary: `
    bg-black1
    text-white
    font-['Arial'] 
    text-[12px] 
    font-normal
    leading-[1.6] 
    tracking-[-0.36px]
    cursor-pointer
  `,
    bold: `
    bg-black1
    text-white 
    text-[20px] 
    font-['Arial'] 
    font-bold
    leading-[19.2px] 
    tracking-[-0.36px] 
    cursor-pointer
`,
  };

  // variant에 따라 스타일 선택
  const selectedStyles = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${selectedStyles} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default GeneralButton;
