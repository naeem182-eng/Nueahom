export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
         {/* LEFT : Logo */}
          <img
            src="/Logo.jpg"
            alt="Nueahom logo"
            className="h-10 w-auto object-contain md:h-14"
          />
        <div className="text-white text-xl font-semibold tracking-wide"
        >
          เนื้อหอม
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <li><a href="#home" className="hover:text-white">หน้าแรก</a></li>
          <li><a href="#products" className="hover:text-white">สินค้า</a></li>
          <li><a href="#halal" className="hover:text-white">ฮาลาล & คุณภาพ</a></li>
          <li><a href="#reviews" className="hover:text-white">รีวิว</a></li>
          <li><a href="#contact" className="hover:text-white">ติดต่อ</a></li>
        </ul>

        {/* CTA */}
        <a
          href="#products"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
        >
          สั่งซื้อ
        </a>
      </div>
    </nav>
  );
}
