// 이용약관
import React from "react";
import Section from "../../_components/Policies/Section";
import TermsFooter from "../../_components/TermsFooter";
import termsData from "../../data/termsData";

const Index = () => {
  return (
    <>
      <div className="policies-container">
        {termsData.map((policy, index) => (
          <Section
            key={index}
            title={policy.title}
            content={policy.content}
            figures={policy.figures}
            isFirstSection={index === 0}
          />
        ))}
      </div>
      <TermsFooter />
    </>
  );
};

export default Index;
