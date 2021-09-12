import MainLayout from "../../components/MainLayout/MainLayout";
import Home from "../../mockups/Home/Home";
import LoginPage from "../../mockups/LoginPage/LoginPage";
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
    exact: true,
    childern: [{
        path: '',
        name: "",
        component: LoginPage,
        exact: true,
    }]
}]

export default ROUTES