import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Reports from "layouts/reports";
import Dashboard from "layouts/dashboard";
import Users from "layouts/users";


// @mui icons
import LoginIcon from '@mui/icons-material/Login';
import ReportIcon from '@mui/icons-material/Report';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';



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
    name: "Sign In",
    key: "sign-in",
    icon: <LoginIcon/>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "SignUp",
    key: "signup",
    icon: <></>,
    route: "/signup",
    component: <SignUp />,
  },
];

export default routes;
