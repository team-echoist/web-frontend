import React, { useEffect } from "react";
import { SideBar } from "@/shared/ui/sidebar";
import { Footer } from "@/shared/ui/footer";
import { useRouter } from "next/navigation";
import { useStore } from "@/shared/store";

interface IconMap {
  home: React.ReactElement;
  myessay: React.ReactElement;
  community: React.ReactElement;
  mypage: React.ReactElement;
}

const routerMapper = {
  home: "/web/main",
  myessay: "/web/myessay",
  community: "/web/community",
  mypage: "/web/mypage",
};

function ActiveSidebar({ isModalOpen }: { isModalOpen: boolean }) {
  const router = useRouter();
  const path = useStore((state) => state.path);
  const setPath = useStore((state) => state.setPath);
  const focusedKey =
    (Object.keys(routerMapper) as Array<keyof IconMap>).find(
      (key) => routerMapper[key] === path
    ) || "home";

  useEffect(() => {
    if (focusedKey !== "home") {
      setPath(routerMapper[focusedKey]);
    }
  }, [focusedKey, setPath]);

  const handleIconClick = (key: keyof IconMap) => {
    setPath(routerMapper[key]);
    router.push(routerMapper[key]);
  };
  if (isModalOpen) {
    return;
  }
  return (
      <SideBar
        focusedKey={focusedKey}
        onIconClick={handleIconClick}
      />
  );
}

export default ActiveSidebar;
