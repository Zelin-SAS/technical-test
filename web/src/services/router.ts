import * as Pages from '../pages';
import { JSX } from 'react';

interface Route {
    path: string;
    component: (props?: any) => JSX.Element;
}

const routes: Route[] = [
    { path: '/', component: Pages.Landing },
    { path: '/login', component: Pages.Login},
    { path: '/dashboard', component: Pages.Dashbord },
];

const Router = () => {
    const currentPath = window.location.pathname;

    const route = routes.find(r => r.path === currentPath);

    if (route) {
        return route.component();
    } else {
        return Pages.NotFound;
    }
};

export default Router;