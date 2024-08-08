import Main from "./pages/main"
import Policy from "./pages/policy"

const routes = [
    {
        key: 'main',
        route: '/',
        component: <Main />,
    },
    {
        key: 'policy',
        route: '/policy',
        component: <Policy />,
    },

]

export default routes
