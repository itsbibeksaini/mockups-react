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
import IRoute from "./IRoute";

const ROUTES: IRoute[] = [{
    path: '/',
    component: Home,
    exact: true
}, {
    path: '/login',
    component: MainLayout,
    props: {
        name: "Login",
    },
    childern: [{
        path: '',        
        component: LoginPage,
    }]
}, {
    path: '/music-store',
    component: MainLayout,
    props: {
        name: 'Music Store'
    },
    childern: [{
        path: '',
        component: MusicStore,
    }]
}, {
    path: '/profile-view',
    component: MainLayout,
    props: {
        name: 'Profile view'
    },
    childern: [{
        path: '',        
        component: ProfileView,
    }]
}, {
    path: '/profile-card',
    component: MainLayout,
    props: {
        name: "Profile card"
    },
    childern: [{
        path: '',
        component: ProfileCard,
    }]
}, {
    path: '/onboarding',
    component: MainLayout,
    props: {
        name: "Onboarding"
    },
    childern: [{
        path: '',        
        component: OnboardingFlow,
    }]
}, {
    path: '/settings',
    component: MainLayout,
    props: {
        name: "Settings"
    },
    childern: [{
        path: '',        
        component: Settings,
    }]
}, {
    path: '/invoices',
    component: MainLayout,
    props: {
        name: "Invoices"
    },
    childern: [{
        path: '',
        component: InvoiceManagerDashboard,
    }]
}, {
    path: '/profiles',
    component: MainLayout,
    props: {
        name: "Profiles"
    },
    childern: [{
        path: '',
        component: ProfilesDashboard,
    }]
}]

export default ROUTES