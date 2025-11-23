import { SocialMediaLink } from "./social-media-link";

export interface ColabsLocationInfo {
  id: number;
  name: string;
  logo: string;
  description: string; 
  address: string; 
  phone: string ;   
  email: string;     
  socialMediaLinks?: SocialMediaLink[];
  website: string;  
}
