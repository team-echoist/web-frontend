// 링크드아웃 운영정책
import React from "react";
import Section from "../../_components/Policy/Section";
import policiesData from "../../data/policiesData";
import PoliciesFooter from "../../_components/Policy/PoliciesFooter";

const Index = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-black mt-16">
        링크드아웃 운영정책
      </h1>
      <div className="policies-container">
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
    </>
  );
};

export default Index;
