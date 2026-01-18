import { useMemo, useState } from "react";
import { productsData } from "../data/productsData";

import NavbarProducts from "../components/layout/NavbarProducts";
import Footer from "../components/layout/Footer";
import HeroProducts from "../components/sections/HeroProducts";

export default function Products() {
  // 👉 1. เตรียม data ที่ใช้จริง

const [activeCategory, setActiveCategory] = useState("all");

const [sortPrice, setSortPrice] = useState("none");
// none | asc | desc

const products = useMemo(() => {
  let result = productsData.filter(p => {
    if (!p.active) return false;
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  if (sortPrice !== "none") {
    result = [...result].sort((a, b) => {
      const priceA = a.price ?? 999999;
      const priceB = b.price ?? 999999;

      return sortPrice === "asc"
        ? priceA - priceB
        : priceB - priceA;
    });
  }

  return result;
}, [activeCategory, sortPrice]);


  // 👉 2. state สำหรับ Modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-dark text-white">
      <NavbarProducts />
      <HeroProducts />

      {/* 👉 3. พื้นที่แสดงสินค้า */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 mb-8">
          {[
      ["ทั้งหมด", "all"],
      ["สไลซ์", "slice"],
      ["สเต็ก", "steak"],
      ["ลูกเต๋า", "dice"],
      ["บด", "ground"],
            ].map(([label, value]) => (
          <button
          key={value}
          onClick={() => setActiveCategory(value)}
          className={`px-4 py-2 rounded-full text-sm transition
            ${
            activeCategory === value
            ? "bg-rose-600 text-white"
            : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
          >
          {label}
          </button>
          ))}
        </div>

        <div className="flex gap-3 mb-10">
          <button
          onClick={() => setSortPrice("asc")}
          className={`px-4 py-2 rounded-full text-sm transition
            ${
            sortPrice === "asc"
            ? "bg-rose-600 text-white"
            : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
          >
          ราคาถูก → แพง
          </button>

          <button
          onClick={() => setSortPrice("desc")}
          className={`px-4 py-2 rounded-full text-sm transition
            ${
            sortPrice === "desc"
            ? "bg-rose-600 text-white"
            : "bg-white/10 text-white/70 hover:bg-white/20"
             }`}
          >
          ราคาแพง → ถูก
          </button>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-stone-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition cursor-pointer"
              onClick={() => setSelectedProduct(p)}
            >
              <img 
                src={p.image}
                alt={p.name}
                className="w-full aspect-square object-contain bg-gray-300"
              />

              <div className="p-4">
                <h3 className="font-semibold text-white/90 text-lg mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-white/70 mb-2">{p.weight}</p>

                <div className="flex items-center justify-between">
                  <span className="text-rose-400 font-semibold">
                    {p.price ? `${p.price} บาท` : "สอบถามราคา"}
                  </span>

                  <a
                    href={`https://m.me/?text=${encodeURIComponent(
                      p.contact.messengerText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm bg-rose-600 px-3 py-1 rounded-full hover:bg-rose-500 transition"
                  >
                    สั่งซื้อ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 👉 4. Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-gray-300 rounded-2xl max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ปุ่มปิด */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-black hover:text-white text-xl"
            >
              ✕
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full aspect-square object-contain mb-4"
            />

            <h2 className="text-xl text-black/70 font-semibold mb-1">
              {selectedProduct.name}
            </h2>
            <p className="text-sm text-black/70 mb-3">
              {selectedProduct.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-rose-400 font-semibold text-lg">
                {selectedProduct.price
                  ? `${selectedProduct.price} บาท`
                  : "สอบถามราคา"}
              </span>

              <a
                href={`https://m.me/?text=${encodeURIComponent(
                  selectedProduct.contact.messengerText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 px-4 py-2 rounded-full hover:bg-rose-500 transition"
              >
                สั่งซื้อ
              </a>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
