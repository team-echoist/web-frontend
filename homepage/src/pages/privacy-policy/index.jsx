// 개인정보처리방침
import React from "react";
import Section from "../../_components/Policy/Section";
import PoliciesFooter from "../../_components/Policy/PoliciesFooter";
import privacyPolicyData from "../../data/privacyPolicyData";

const Index = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-black mt-16">
        개인정보처리방침
      </h1>
      <div className="policies-container">
        {privacyPolicyData.map((policy, index) => (
          <Section
            key={index}
            title={policy.title}
            content={policy.content}
            figures={policy.figures}
            isFirstSection={index === 0}
          />
        ))}
      </div>
      <PoliciesFooter />
    </>
  );
};

export default Index;
