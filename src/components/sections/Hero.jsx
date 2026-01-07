import { useEffect, useState } from "react";

const title = "Premium Beef Halal";
const subtitle = "เนื้อวัวฮาลาลพรีเมียม คัดคุณภาพ สำหรับย่าง ชาบู และสเต็ก";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative  h-[35vh] md:h-[40vh] overflow-hidden font-sans">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/grilled-beef.mp4"
        autoPlay
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-end md:items-center px-6 md:px-20 pb-16 md:pb-0">
        <div className="max-w-xl text-left">

          {/* Title word by word */}
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-2 transition-all duration-700 ease-out
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            {subtitle.split(" ").map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-1 transition-all duration-700 ease-out
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                style={{ transitionDelay: `${600 + i * 80}ms` }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* Button */}
          <a
            href="#products"
            className={`inline-block px-8 py-3 bg-primary text-white rounded-md
              transition-all duration-700
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ transitionDelay: "1400ms" }}
          >
            ดูสินค้า
          </a>

        </div>
      </div>
    </section>
  );
}
