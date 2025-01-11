// 위치 기반 서비스 이용 약관
import React from "react";
import Section from "../../components/Policy/Section";
import PoliciesFooter from "../../components/Policy/PoliciesFooter";
import locationTermsData from "../../data/locationTermsData";

const LocationTermsPage = () => {
  return (
    <div className="bg-white">
      <div className="policies-container">
        <h1 className="text-3xl text-center font-black mt-16 sm:mt-20 sm:text-4xl">
          위치 기반 서비스 이용 약관
        </h1>
        {locationTermsData.map((policy, index) => (
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

export default LocationTermsPage;
