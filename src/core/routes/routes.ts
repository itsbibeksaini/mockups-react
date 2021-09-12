import MainLayout from "../../components/MainLayout/MainLayout";
import Home from "../../mockups/Home/Home";
import IRoute from "./IRoute";

const ROUTES: IRoute[] = [{
    path: '/',
    name: "",
    component: Home,
    exact: true
}, {
    path: '/login',
    name: "",
    component: MainLayout,
    exact: true
}]

export default ROUTES