import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Essay from "layouts/essay";
import Alarm from "layouts/alarm";
import DashBoardDetail from "layouts/dashboard/detail";

// @mui icons
import Icon from "@mui/material/Icon";
import Users from "layouts/users";
import Reviews from "layouts/reviews";
import Reports from "layouts/reports";

const routes = [
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <Icon fontSize="small">Reports</Icon>,
    route: "/reports",
    component: <Reports />,
  },
  {
    type: "collapse",
    name: "Reviews",
    key: "reviews",
    icon: <Icon fontSize="small">Reviews</Icon>,
    route: "/reviews",
    component: <Reviews />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">Users</Icon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "collapse",
    name: "SignUp",
    key: "signup",
    icon: <Icon fontSize="small">signup</Icon>,
    route: "/signup",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "UserTables",
    key: "UserTables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/userTables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Essay",
    key: "Essay",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/essay",
    component: <Essay />,
  },
  {
    type: "collapse",
    name: "Send Alarm",
    key: "Send Alarm",
    icon: <Icon fontSize="small">Send Alarm</Icon>,
    route: "/sendAlarm",
    component: <Alarm />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    name: "dashboardDetails",
    key: "dashboard-details",
    route: "/dashboard/:id",
    component: <DashBoardDetail />,
  },
];

export default routes;
