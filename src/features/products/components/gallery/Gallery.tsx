// import { ProductCard } from "../ProductCard";

export const ProductGallery = () => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {/* {filteredProducts.map((p) => (
        <ProductCard
          key={p.name}
          name={p.name}
          category={p.category}
          imageUrl={p.imageUrl}
          imageAlt={`Produk ecoprint ${p.name}`}
          badgePosition="left"
        />
      ))} */}
      <div className="h-48 bg-gray-200" />
      <div className="h-48 bg-gray-300" />
      <div className="h-48 bg-gray-400" />
      <div className="h-48 bg-gray-500" />
      <div className="h-48 bg-gray-600" />
      <div className="h-48 bg-gray-700" />
    </section>
  );
};
