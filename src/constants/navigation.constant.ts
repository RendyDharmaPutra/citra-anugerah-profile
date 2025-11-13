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
    name: "Home",
    path: "/",
  },
  {
    name: "Product",
    path: "/products",
  },
  {
    name: "Training",
    path: "/training",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
] as const);
