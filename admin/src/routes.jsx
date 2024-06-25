import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Reports from "layouts/reports";
import Dashboard from "layouts/dashboard";
import Users from "layouts/users";
import Essay from "layouts/essay";
import DashBoardDetail from "layouts/dashboard/detail";
import Profile from "layouts/profile";
import { handleLogout } from "./utils/handleLogout";
import Notice from "layouts/notice";
import NoticeDetail from "layouts/notice/detail";
import Update from "layouts/update"

// @mui icons
import LoginIcon from "@mui/icons-material/Login";
import ReportIcon from "@mui/icons-material/Report";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import CampaignIcon from "@mui/icons-material/Campaign";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon></DashboardIcon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <ReportIcon />,
    route: "/reports",
    component: <Reports />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <GroupIcon></GroupIcon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "collapse",
    name: "Essay",
    key: "Essay",
    icon: <BorderColorIcon></BorderColorIcon>,
    route: "/essay",
    component: <Essay />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Notice",
    key: "notice",
    icon: <CampaignIcon></CampaignIcon>,
    route: "/notice",
    component: <Notice />,
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <LoginIcon />,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    name: "SignUp",
    key: "signup",
    icon: <></>,
    route: "/signup",
    component: <SignUp />,
  },
  {
    name: "dashboardDetails",
    key: "dashboard-details",
    route: "/dashboard/:id",
    component: <DashBoardDetail />,
  },
  {
    name: "noticeDetails",
    key: "notice-details",
    route: "/notice/:id",
    component: <NoticeDetail />,
  },
  {
    name: "update",
    key: "update",
    route: "/update",
    component: <Update />,
  },

  {
    type: "collapse",
    name: "logout",
    key: "logout",
    icon: <LogoutIcon />,
    onClick: handleLogout,
  },
];

export default routes;
