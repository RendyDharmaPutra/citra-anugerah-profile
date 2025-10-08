type navigationItem = {
  name: string;
  path: string;
};

export const NAVIGATION: readonly navigationItem[] = Object.freeze([
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
    path: "/contact",
  },
] as const);
