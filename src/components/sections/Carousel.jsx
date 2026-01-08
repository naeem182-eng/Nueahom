import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Ribeye Slice",
    subtitle: "บางกำลังดี สำหรับชาบูและปิ้งย่าง",
    image: "/images/ribeye-slice.jpg",
  },
  {
    id: 2,
    title: "Premium Steak Cut",
    subtitle: "คัดเฉพาะชิ้นสวย สำหรับสายสเต็ก",
    image: "/images/steak-cut.jpg",
  },
  {
    id: 3,
    title: "Tomahawk Beef",
    subtitle: "สายย่างตัวจริงต้องไม่พลาด",
    image: "/images/tomahawk.jpg",
  },
  {
    id: 4,
    title: "Halal Ground Beef",
    subtitle: "บดสด เหมาะทั้งเบอร์เกอร์และอาหารบ้าน",
    image: "/images/ground-beef.jpg",
  },
];

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-full py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Selected Cuts
        </h2>
        <a
          href="/products"
          className="text-sm font-medium text-gray-600 hover:text-black transition"
        >
          View all products →
        </a>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 80}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[80%] md:min-w-[60%] lg:min-w-[45%] px-3"
            >
              <div className="group rounded-2xl overflow-hidden bg-neutral-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.subtitle}
                  </p>
                  <span className="inline-block text-sm font-medium">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
