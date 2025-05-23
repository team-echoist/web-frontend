// 링크드아웃 운영정책
import React from "react";
import Section from "../../components/Policy/Section";
import policiesData from "../../data/policiesData";
import PoliciesFooter from "../../components/Policy/PoliciesFooter";

const OperationalPolicyPage = () => {
  return (
    <div className="bg-white">
      <div className="policies-container">
        <h1 className="text-3xl text-center font-black mt-16 sm:mt-20 sm:text-4xl">
          링크드아웃 운영정책
        </h1>
        {policiesData.map((policy, index) => (
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

export default OperationalPolicyPage;
