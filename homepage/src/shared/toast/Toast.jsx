import React, { useEffect } from "react";

function ColorToast({
  text,
  type = "normal",
  duration = 3000,
  onClose,
  isShowToast = false,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isShowToast) return null;

  const baseClasses =
    "flex items-center h-[53px] xl:py-[40px] lg:py-[40px] md:py-[40px] sm:py-[15px] justify-center gap-[71px] w-[360px] h-[53px] rounded-[10px] text-white border-none z-[1200] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
  const typeClasses = type === "alert" ? "bg-red" : "bg-pointcolor";

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      <span className="text-center">{text}</span>
    </div>
  );
}

export default ColorToast;
