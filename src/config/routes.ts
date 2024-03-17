import Home from '../pages/Home.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import CodingTempleProjects from '../pages/CodingTempleProjects.tsx';

interface RouteType {
  path: string,
  component: () => JSX.Element,
  name: string
}

const routes: RouteType[] = [
    {
        path: "/",
        component: Home,
        name: "Home Screen"
    },
    {
        path: "/Dashboard",
        component:  Dashboard,
        name: "Dashboard"
    },
    {
        path: "/CodingTemple",
        component: CodingTempleProjects,
        name: "CodingTempleProjects"
    }
];

export default routes;
