import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-dark mb-3">
      เนื้อหอม Premium Beef Halal
    </h1>
    <p className="text-gray-600 mb-10">
      เนื้อวัวฮาลาลคุณภาพ คัดพิเศษ สำหรับทุกมื้อสำคัญ
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </div>
</div>
  );
};

export default Products;

