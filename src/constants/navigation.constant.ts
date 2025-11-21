/**
 * Type for navigation item.
 *
 * @property {string} name - The name of the navigation item.
 * @property {string} path - The path of the navigation item.
 */
export type NavigationItem = {
  name: string;
  path: string;
};

/**
 * An array of navigation item.
 *
 * @constant
 * @readonly
 * @property {NavigationItem[]} items - An array of navigation item.
 */
export const NAVIGATION: readonly NavigationItem[] = Object.freeze([
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Produk",
    path: "/products",
  },
  {
    name: "Pelatihan",
    path: "/training",
  },
  {
    name: "Tentang Kami",
    path: "/about",
  },
  {
    name: "Kontak",
    path: "/contacts",
  },
] as const);
