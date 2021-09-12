import MainLayout from "../../components/MainLayout/MainLayout";
import Home from "../../mockups/Home/Home";
import LoginPage from "../../mockups/LoginPage/LoginPage";
import MusicStore from "../../mockups/MusicStore/MusicStore";
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
        name: "Login",
        component: LoginPage,
        exact: true,
    }]
}, {
    path: '/music-store',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Music Store",
        component: MusicStore,
        exact: true,
    }]
}]

export default ROUTES