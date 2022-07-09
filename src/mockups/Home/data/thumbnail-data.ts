import invoiceDashboard from '../../../assets/thumbs/invoiceDashboard.png';
import loginpage from '../../../assets/thumbs/loginpage.png';
import musicstore from '../../../assets/thumbs/musicstore.png';
import onboarding from '../../../assets/thumbs/onboarding.png';
import profilcard from '../../../assets/thumbs/profile-card.png';
import profileview from '../../../assets/thumbs/profile-view.png';
import profilesDashboard from '../../../assets/thumbs/profilesDashboard.png';
import settings from '../../../assets/thumbs/settings.png';
import IThumbnail from "../state/IThumbnail";


export const THUMBNAIL_DATA:IThumbnail[] = [{
    image: loginpage,
    routerLink: '/login',
    size:''
}, {
    image: musicstore,
    routerLink: '/music-store',
    size:''
}, {
    image: profileview,
    routerLink: '/profile-view',
    size:''
}, {
    image: profilcard,
    routerLink: '/profile-card',
    size:''
}, {
    image: onboarding,
    routerLink: '/onboarding',
    size:''
}, {
    image: settings,
    routerLink: '/settings',
    size:''
}, {
    image: invoiceDashboard,
    routerLink: '/invoices',
    size:''
}, {
    image: profilesDashboard,
    routerLink: '/profiles',
    size:''
}, {
    image: "",
    routerLink: '/worklogs',
    size:''
}]