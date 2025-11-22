import { DownloadDocument } from './download-document';
import { SocialMediaLink } from './social-media-link';
import { Unit } from './unit';

//export enum estado { 'trabajo', 'venta', 'proyecto'};

export interface HousingLocationInfo {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    realEstateName?: string;
    realEstateLink?: string;
    minimunPrice: string;
    units?: Unit[]; 
    resume: string;
    downloadDocuments?: DownloadDocument[];  
    galleryImages?: string[]; // Array de rutas a las imágenes de la galería
    renderLink?: string;
    mapLink?: string;
    socialMediaLinks?: SocialMediaLink[];

    estado?: string; 
}
