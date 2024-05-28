
import Login from "layouts/login";

// @mui icons
import Icon from "@mui/material/Icon";
import LoginIcon from '@mui/icons-material/Login';

const routes = [
  {
    type: "collapse",
    name: "Login",
    key: "login",
    icon: <LoginIcon/>,
    route: "/login",
    component: <Login />,
  },

];

export default routes;
