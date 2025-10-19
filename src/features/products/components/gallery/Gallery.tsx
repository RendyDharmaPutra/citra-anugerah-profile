import { ProductCard } from "./ProductCard";

export const ProductGallery = () => {
  const products = [
    { image: "https://picsum.photos/200", category: "pakaian" },
    { image: "https://picsum.photos/201", category: "aksesoris" },
    { image: "https://picsum.photos/202", category: "kain" },
    { image: "https://picsum.photos/203", category: "topi" },
    { image: "https://picsum.photos/204", category: "pakaian" },
    { image: "https://picsum.photos/205", category: "pakaian" },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          category={product.category}
        />
      ))}
    </section>
  );
};
