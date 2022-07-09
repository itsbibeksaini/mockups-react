import MainLayout from "../../components/MainLayout/MainLayout";
import Home from "../../mockups/Home/Home";
import InvoiceManagerDashboard from "../../mockups/InvoiceManagerDashboard/InvoiceManagerDashboard";
import LoginPage from "../../mockups/LoginPage/LoginPage";
import MusicStore from "../../mockups/MusicStore/MusicStore";
import OnboardingFlow from "../../mockups/OnboardingFlow/OnboardingFlow";
import ProfileCard from "../../mockups/ProfileCard/ProfileCard";
import ProfilesDashboard from "../../mockups/ProfilesDashboard/ProfilesDashboard";
import ProfileView from "../../mockups/ProfileView/ProfileView";
import Settings from "../../mockups/Settings/Settings";
import TaskBoards from "../../mockups/TaskBoards/TaskBoards";
import WorklogsDashboard from "../../mockups/Worklogs/WorklogsDashboard/WorklogsDashboard";
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
}, {
    path: '/profile-view',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Profile view",
        component: ProfileView,
        exact: true,
    }]
}, {
    path: '/profile-card',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Profile card",
        component: ProfileCard,
        exact: true,
    }]
}, {
    path: '/onboarding',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Onboarding",
        component: OnboardingFlow,
        exact: true,
    }]
}, {
    path: '/settings',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Settings",
        component: Settings,
        exact: true,
    }]
}, {
    path: '/invoices',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Invoices",
        component: InvoiceManagerDashboard,
        exact: true,
    }]
}, {
    path: '/profiles',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Profiles",
        component: ProfilesDashboard,
        exact: true,
    }]
}, {
    path: '/worklogs',
    name: "",
    component: MainLayout,
    exact: true,
    childern: [{
        path: '',
        name: "Worklogs",
        component: WorklogsDashboard,
        exact: true,
    }]
}]

export default ROUTES