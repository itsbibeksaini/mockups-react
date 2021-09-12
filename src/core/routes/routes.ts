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
    component: LoginPage,
    exact: true
}]

export default ROUTES