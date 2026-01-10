const Footer = () => {
  return (
    <footer className="bg-slate-800 text-neutral-400">
      {/* main footer */}
      <div className="mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-2 gap-12 justify-between">

        {/* Brand */}
        <div className="space-y-4">
          {/* Logo */}
        <div className="flex items-center gap-3 justify-start ">
          <img
            src="/Logo.png"
            alt="Nueahom logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>
          <h3 className="text-2xl font-semibold text-white tracking-wide">
            เนื้อหอม
          </h3>
          <p className="text-xl leading-relaxed">
            เนื้อย่างพรีเมี่ยม<br />
            คัดสรรด้วยใจ เพื่อทุกมื้อพิเศษ
          </p>
        </div>

        {/* Navigation */}
        {/* <div className="space-y-4">
          <h4 className="text-sm font-medium text-white tracking-wider uppercase">
            Menu
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Products</li>
            <li className="hover:text-white transition">About</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div> */}

        {/* Contact / Social */}
        <div className="space-y-4 flex flex-col mt-auto">
          <h4 className="text-xl font-medium text-white tracking-wider uppercase">
            Contact
          </h4>
          <ul className="space-y-2 text-xl">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LINE Official</li>
          </ul>
        </div>

      </div>

      {/* bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto px-6 py-6 text-xs text-neutral-500 flex justify-between">
          <span>© 2026 เนื้อหอม</span>
          <span>Crafted with care</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
