import React from "react";
import DefaultLayout from "../../ui/DefaultLayout";
function RecentEssays({
  modalHandler,
}: {
  modalHandler: (name: string) => void;
}) {
  return (
    <DefaultLayout modalHandler={modalHandler} name="recent">
      RecentEssays
    </DefaultLayout>
  );
}

export default RecentEssays;
