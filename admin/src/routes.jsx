import SignIn from 'layouts/authentication/sign-in'
import SignUp from 'layouts/authentication/sign-up'
import Reports from 'layouts/reports'
import Dashboard from 'layouts/dashboard'
import Users from 'layouts/users'
import Essay from 'layouts/essay'
import DashBoardDetail from 'layouts/dashboard/detail'
import Profile from 'layouts/profile'
import { handleLogout } from './utils/handleLogout'
import Notice from 'layouts/notice'
import NoticeDetail from 'layouts/notice/detail'
import Update from 'layouts/update'
import Inquire from 'layouts/inquire'
import Release from 'layouts/release'
import UserDetail from 'layouts/users/detail'
import EssayDetail from 'layouts/essay/detail'
import ReportDetail from 'layouts/reports/detail'

// @mui icons
import LoginIcon from '@mui/icons-material/Login'
import ReportIcon from '@mui/icons-material/Report'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import LogoutIcon from '@mui/icons-material/Logout'
import CampaignIcon from '@mui/icons-material/Campaign'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import UpdateIcon from '@mui/icons-material/Update'

const routes = [
    {
        type: 'collapse',
        name: 'Dashboard',
        key: 'dashboard',
        icon: <DashboardIcon></DashboardIcon>,
        route: '/dashboard',
        component: <Dashboard />,
    },
    {
        type: 'collapse',
        name: 'Reports',
        key: 'reports',
        icon: <ReportIcon />,
        route: '/reports',
        component: <Reports />,
    },
    {
        type: 'collapse',
        name: 'Users',
        key: 'users',
        icon: <GroupIcon></GroupIcon>,
        route: '/users',
        component: <Users />,
    },
    {
        type: 'collapse',
        name: 'Essay',
        key: 'Essay',
        icon: <BorderColorIcon></BorderColorIcon>,
        route: '/essay',
        component: <Essay />,
    },
    {
        type: 'collapse',
        name: 'Notice',
        key: 'notice',
        icon: <CampaignIcon></CampaignIcon>,
        route: '/notice',
        component: <Notice />,
    },
    {
        type: 'collapse',
        name: 'Question And Answer',
        key: 'inquire',
        icon: <QuestionAnswerIcon></QuestionAnswerIcon>,
        route: '/inquire',
        component: <Inquire />,
    },
    {
        type: 'collapse',
        name: 'Release Notes',
        key: 'release',
        icon: <UpdateIcon></UpdateIcon>,
        route: '/release',
        component: <Release />,
    },
    {
        type: 'collapse',
        name: 'Profile',
        key: 'profile',
        icon: <AssignmentIndIcon></AssignmentIndIcon>,
        route: '/profile',
        component: <Profile />,
    },

    {
        name: 'Sign In',
        key: 'sign-in',
        icon: <LoginIcon />,
        route: '/authentication/sign-in',
        component: <SignIn />,
    },
    {
        name: 'SignUp',
        key: 'signup',
        icon: <></>,
        route: '/signup',
        component: <SignUp />,
    },
    {
        name: 'dashboardDetails',
        key: 'dashboard-details',
        route: '/dashboard/:id',
        component: <DashBoardDetail />,
    },
    {
        name: 'noticeDetails',
        key: 'notice-details',
        route: '/notice-detail',
        component: <NoticeDetail />,
    },
    {
        name: 'update',
        key: 'update',
        route: '/update',
        component: <Update />,
    },
    {
        name: 'userDetails',
        key: 'user-detail',
        route: '/user-detail',
        component: <UserDetail />,
    },
    {
        name: 'essayDetails',
        key: 'essay-detail',
        route: '/essay-detail',
        component: <EssayDetail />,
    },
    {
        name: 'reportDetails',
        key: 'report-detail',
        route: '/report-detail',
        component: <ReportDetail />,
    },
    {
        type: 'collapse',
        name: 'logout',
        key: 'logout',
        icon: <LogoutIcon />,
        onClick: handleLogout,
    },
]

export default routes
