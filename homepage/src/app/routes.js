import OperationalPolicy from "../pages/operational-policy/OperationalPolicyPage";
import Terms from "../pages/terms/TermsPage";
import LocationTerms from "../pages/location-terms/LocationTermsPage";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicyPage";
import MainPage from "../pages/main/MainPage";
import PremiumPage from "../pages/premium/PremiumPage";
import About from "../pages/about"
import Learn from "../pages/learn"
import NewsLetter from "../pages/newsletter"


const routes = [
  {
    key: "main",
    route: "/",
    component: <MainPage />,
  },
  {
    key: "about",
    route: "/about",
    component: <About />,
  },
  {
    key: "learn",
    route: "/learn",
    component: <Learn />,
  },
  {
    key: "premium",
    route: "/premium",
    component: <PremiumPage />,
  },
  {
     key: "newsletter",
     route: "/newsletter",
    component: <NewsLetter />,
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
