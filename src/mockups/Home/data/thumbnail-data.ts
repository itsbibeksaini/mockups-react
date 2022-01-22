import IThumbnail from "../state/IThumbnail";
import loginpage from '../../../assets/thumbs/loginpage.png'
import musicstore from '../../../assets/thumbs/musicstore.png'
import profileview from '../../../assets/thumbs/profile-view.png'
import profilcard from '../../../assets/thumbs/profile-card.png'
import onboarding from '../../../assets/thumbs/onboarding.png'
import settings from '../../../assets/thumbs/settings.png'
import invoiceDashboard from '../../../assets/thumbs/invoiceDashboard.png'


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
    image: "",
    routerLink: '/task-boards',
    size:''
}]