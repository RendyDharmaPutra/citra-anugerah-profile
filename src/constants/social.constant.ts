/**
 * Object containing social media links.
 *
 * @constant
 * @property {string} instagram - Link to Instagram profile.
 * @property {string} facebook - Link to Facebook profile.
 * @property {string} whatsapp - Link to WhatsApp profile.
 */
export const SOCIAL_MEDIA = Object.freeze({
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/citraanugerah/",
  },
  facebook: {
    name: "Facebook",
    href: "https://www.facebook.com/citraanugerah/",
  },
  whatsapp: {
    name: "WhatsApp",
    href: "https://wa.me/6285151555555",
  },
} as const);
