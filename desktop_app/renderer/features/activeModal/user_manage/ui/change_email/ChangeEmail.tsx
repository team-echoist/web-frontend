import React from "react";
import DefaultLayout from "@/features/activeModal/ui/DefaultLayout";

function ChangeEmail({
  submodalHandler,
}: {
  submodalHandler: (name: string) => void;
}) {
  return (
    <DefaultLayout
      modalHandler={submodalHandler}
      isSubModal={true}
      name="changeEmail"
    >
      ChangePassword
    </DefaultLayout>
  );
}

export default ChangeEmail;
