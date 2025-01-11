// 개인정보처리방침
import React from "react";
import Section from "../../components/Policy/Section";
import PoliciesFooter from "../../components/Policy/PoliciesFooter";
import privacyPolicyData from "../../data/privacyPolicyData";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white">
      <div className="policies-container">
      <h1 className="text-3xl text-center font-black mt-16 sm:mt-20 sm:text-4xl">
        개인정보처리방침
      </h1>
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
    </div>
  );
};

export default PrivacyPolicyPage;
