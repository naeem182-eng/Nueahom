import { useMemo } from "react";
import { productsData } from "../data/productsData";

import NavbarProducts from "../components/layout/์NavbarProducts";
import Footer from "../components/layout/Footer";
import HeroProducts from "../components/sections/HeroProducts";

export default function Products() {

  // 👉 1. เตรียม data ที่ใช้จริง
  const products = useMemo(
    () => productsData.filter(p => p.active),
    []
  );

  return (
    <div className="bg-dark text-white">
      <NavbarProducts />
      <HeroProducts />

      {/* 👉 2. พื้นที่แสดงสินค้า */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-stone-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img 
                src={p.image}
                alt={p.name}
                className="w-full bg-gray-300 aspect-square object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-white/90 text-lg mb-1">{p.name}</h3>
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

      <Footer />
    </div>
  );
}


