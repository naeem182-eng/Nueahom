import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Slice Meat",
    subtitle: "บางกำลังดี สำหรับชาบูและปิ้งย่าง",
    image: "/SliceMeat.png", // แนะนำพื้นหลังใส
  },
  {
    id: 2,
    title: "Premium Steak Cut",
    subtitle: "คัดเฉพาะชิ้นสวย สำหรับสายสเต็ก",
    image: "/RibEye.png",
  },
  {
    id: 3,
    title: "Tomahawk Beef",
    subtitle: "สายย่างตัวจริงต้องไม่พลาด",
    image: "/ToMaHawk.png",
  },
  {
    id: 4,
    title: "Halal Ground Beef",
    subtitle: "บดสด เหมาะทั้งเบอร์เกอร์และอาหารบ้าน",
    image: "/GroundBeef.png",
  },
];

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  // จำนวน card ที่เห็นต่อ viewport
  const visibleCards =
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1;

  const maxIndex = items.length - visibleCards;

  const step =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 45
      : window.innerWidth >= 768
      ? 60
      : 80;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // swipe (mobile)
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="relative w-full py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Selected Cuts
        </h2>
        <Link to="/products"
          className="text-sm font-medium text-gray-400 hover:text-white transition"
        >
          View all products →
        </Link>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * step}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[80%] md:min-w-[60%] lg:min-w-[45%] px-4"
            >
              <div className="group rounded-2xl bg-zinc-100 backdrop-blur-md shadow-lg hover:shadow-2xl transition">
                <div className="h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center bg-gray-300" >
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => setSelectedImage(item)}
                    className="h-full w-full object-contain cursor-zoom-in group-hover:scale-105 transition duration-500 drop-shadow-xl"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl text-black font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-l text-gray-600 mb-4">
                    {item.subtitle}
                  </p>
                  <span className="inline-block text-sm text-rose-400 font-medium">
                    <Link to="/products">ดูเพิ่มเติม →</Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}>
      
      {/* Close button */}
            <button onClick={() => setSelectedImage(null)} 
            className="absolute -top-4 -right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black">
        ✕
            </button>

      {/* Image */}
      <img
        src={selectedImage.image}
        alt={selectedImage.title}
        className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
      />

      {/* Caption */}
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
        <p className="text-gray-300 text-xl mt-1">
          {selectedImage.subtitle}
        </p>
      </div>
    </div>
  </div>
)}


        {/* Desktop Controls */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full backdrop-blur disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full backdrop-blur disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
