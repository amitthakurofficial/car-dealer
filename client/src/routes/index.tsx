import Login from "../auth/Login";
import Dashboard from "../components/Dashboard";


const indexRoutes = [
    { path:"/login",component:Login},

    {  path:"/",component: Dashboard},
]

export default indexRoutes;