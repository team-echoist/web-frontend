import React, { useState } from "react";
import { Footer } from "@/shared/ui/footer";
import { useRouter } from "next/navigation";
interface IconMap {
  home: React.ReactElement;
  essay: React.ReactElement;
  community: React.ReactElement;
  mypage: React.ReactElement;
}

const routerMapper = {
  home: "/web/home",
  essay: "/web/essay",
  community: "/web/community",
  mypage: "/web/mypage",
};

function ActiveFooter() {
  const [focusedKey, setFocusedKey] = useState<keyof IconMap>("home");
  const router = useRouter();

  const handleIconClick = (key: keyof IconMap) => {
    setFocusedKey(key);
    router.push(routerMapper[key]);
  };
  return <Footer focusedKey={focusedKey} onIconClick={handleIconClick} />;
}

export default ActiveFooter;
