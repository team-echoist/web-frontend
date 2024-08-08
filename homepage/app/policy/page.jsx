import { Section } from "../_components/Policy";
import policiesData from "../data/policiesData";

const Index = () => {
  return (
    <>
      <div className="policies-container">
        {policiesData.map((policy, index) => (
          <Section
            key={index}
            title={policy.title}
            content={policy.content}
            figures={policy.figures}
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
