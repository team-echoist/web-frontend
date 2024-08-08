import dynamic from "next/dynamic";
import policiesData from "../data/policiesData";

const DynamicSection = dynamic(() => import("../_components/Policy/Section"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <div className="policies-container">
        {policiesData.map((policy, index) => (
          <DynamicSection
            key={index}
            title={policy.title}
            content={policy.content}
            figures={policy.figures}
            isFirstSection={index === 0}
          />
        ))}
      </div>
      <footer className="mx-6 my-8 text-sm text-grey-500">
        본 서비스의 모든 저작권은 링크드아웃에 있으며, 어떠한 형태로든 복제나
        배포를 금지합니다.
      </footer>
    </>
  );
};

export default Index;
