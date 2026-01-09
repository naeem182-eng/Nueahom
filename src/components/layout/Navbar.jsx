import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      {/* INNER */}
      <div className="mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 justify-start ">
          <img
            src="/Logo.png"
            alt="Nueahom logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <span className="text-white text-lg font-semibold tracking-wide">
            เนื้อหอม
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mx-auto w-full max-w-3xl items-center justify-between text-sm text-gray-200 tracking-wide">
          <li><a href="#home" className="hover:text-white">หน้าแรก</a></li>
          <li><a href="#products" className="hover:text-white">สินค้า</a></li>
          <li><a href="#halal" className="hover:text-white">ฮาลาล & คุณภาพ</a></li>
          <li><a href="#reviews" className="hover:text-white">รีวิว</a></li>
          <li><a href="#contact" className="hover:text-white">ติดต่อ</a></li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#products"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700
                     text-white px-5 py-2 rounded-full text-sm font-medium transition shrink-0"
        >
          สั่งซื้อ
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 bg-black/90 text-gray-200 text-sm">
          {[
            ["หน้าแรก", "#home"],
            ["สินค้า", "#products"],
            ["ฮาลาล & คุณภาพ", "#halal"],
            ["รีวิว", "#reviews"],
            ["ติดต่อ", "#contact"],
          ].map(([label, link]) => (
            <li key={label}>
              <a
                href={link}
                className="block hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Mobile CTA */}
          <a
            href="#products"
            className="mt-4 inline-block text-center bg-red-600 hover:bg-red-700
                       text-white py-3 rounded-full font-medium transition"
            onClick={() => setOpen(false)}
          >
            สั่งซื้อ
          </a>
        </ul>
      </div>
    </nav>
  );
}
