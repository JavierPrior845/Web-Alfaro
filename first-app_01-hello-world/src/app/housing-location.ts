import { SocialMediaLink } from './social-media-link';
import { Unit } from './unit';

export interface HousingLocationInfo {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    realEstateName?: string;
    realEstateLink: string;
    minimunPrice: string;
    units: Unit[]; 
    resume: string;
    lat?: number;
    lng?: number;
    // --- NUEVA PROPIEDAD ---
    galleryImages?: string[]; // Array de rutas a las imágenes de la galería
    renderLink?: string;
    socialMediaLinks?: SocialMediaLink[];
}
