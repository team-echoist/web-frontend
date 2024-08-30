import OperationalPolicy from "../features/operational-policy/OperationalPolicyPage";
import Terms from "../features/terms/TermsPage";
import LocationTerms from "../features/location-terms/LocationTermsPage";
import PrivacyPolicy from "../features/privacy-policy/PrivacyPolicyPage";
import MainPage from "../features/main/MainPage";
import AboutPage from "../features/about/AboutPage";
import LearnPage from "../features/learn/LearnPage";
import PremiumPage from "../features/premium/PremiumPage";

const routes = [
  {
    key: "main",
    route: "/",
    component: <MainPage />,
  },
  {
    key: "about",
    route: "/",
    component: <AboutPage />,
  },
  {
    key: "learn",
    route: "/",
    component: <LearnPage />,
  },
  {
    key: "premium",
    route: "/",
    component: <PremiumPage />,
  },
  {
    key: "newsLetter",
    route: "/",
    component: <NewsLetterPage />,
  },
  // 약관 페이지
  {
    key: "terms",
    route: "/terms",
    component: <Terms />,
  },
  {
    key: "location-terms",
    route: "/location-terms",
    component: <LocationTerms />,
  },
  {
    key: "privacy-policy",
    route: "/privacy-policy",
    component: <PrivacyPolicy />,
  },
  {
    key: "operational-policy",
    route: "/operational-policy",
    component: <OperationalPolicy />,
  },
];

export default routes;
