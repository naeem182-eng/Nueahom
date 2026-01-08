import { useEffect, useState } from "react";

const title = "Premium Beef Halal";
const subtitle =
  "เนื้อวัวฮาลาลพรีเมียม คัดคุณภาพ สำหรับย่าง ชาบู และสเต็ก";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[50vh] bg-black overflow-hidden font-sans">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/grilled-beef.mp4"
        autoPlay
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-24 pb-14 md:pb-20">
        <div className="max-w-xl text-left">
          {/* Title */}
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight mb-4">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-2 transition-all duration-700
                ease-[cubic-bezier(.22,.61,.36,1)]
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            {subtitle.split(" ").map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-1 transition-all duration-700
                ease-[cubic-bezier(.22,.61,.36,1)]
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                style={{ transitionDelay: `${600 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* CTA */}
          <a
            href="#products"
            className={`inline-block px-8 py-3 rounded-md bg-primary text-white text-sm font-medium
            transition-all duration-700
            ease-[cubic-bezier(.22,.61,.36,1)]
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: "1400ms" }}
          >
            ดูสินค้า
          </a>
        </div>
      </div>
    </section>
  );
}
