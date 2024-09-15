import OperationalPolicy from "../features/operational-policy/OperationalPolicyPage";
import Terms from "../features/terms/TermsPage";
import LocationTerms from "../features/location-terms/LocationTermsPage";
import PrivacyPolicy from "../features/privacy-policy/PrivacyPolicyPage";
import MainPage from "../features/main/MainPage";
import AboutPage from "../features/about/AboutPage";
import LearnPage from "../features/learn/LearnPage";
import PremiumPage from "../features/premium/PremiumPage";
import NewsLetterPage from "../features/newsletter/newsletterPage";

const routes = [
  {
    key: "main",
    route: "/",
    component: <MainPage />,
  },
  {
    key: "about",
    route: "/about",
    component: <AboutPage />,
  },
  {
    key: "learn",
    route: "/learn",
    component: <LearnPage />,
  },
  {
    key: "premium",
    route: "/premium",
    component: <PremiumPage />,
  },
  {
    key: "newsletter",
    route: "/newsletter",
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
