import { productsData } from "@/data/productsData";
import ProductCard from "@/components/ProductCard";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productsData.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
