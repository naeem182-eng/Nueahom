const Footer = () => {
  return (
    <footer id="about-us" className="bg-slate-800 text-neutral-400">
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
            เนื้อพรีเมี่ยม<br />
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
        <div  id="contact" className="space-y-4 flex flex-col mt-auto">
          <h4 className="text-xl font-medium text-white tracking-wider uppercase">
            Contact
          </h4>
          <ul className="space-y-2 text-xl">
            <li className="flex items-center gap-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1qXGzh_3SqnjKfLj7ojoe1sNS3XmSzpYGTIFuVQQhw1WQfizbeFbtoWL&s"/>
              <a href="https://maps.app.goo.gl/f1tvhNUMaHKSwyfx8" target="_blank" rel="noopener noreferrer"
            onClick={() => {
            window.gtag?.('event', 'click_map');
            }}>ดูของจริง ไม่จกตา ที่ร้านเรา</a></li>
            <li className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/250px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-8 h-8" />
              <a href="https://www.facebook.com/profile.php?id=61572980017738" target="_blank" rel="noopener noreferrer"
              onClick={() => {
              window.gtag?.('event', 'click_facebook');
              }}>เนื้อหอม Premium Beef Halal </a></li>
            <li className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Facebook_Messenger_logo_2025.svg" alt="Messenger" className="w-8 h-8" />
              <a href="https://m.me/์NueaHom" target="_blank" rel="noopener noreferrer"
              onClick={() => {
              window.gtag?.('event', 'click_facebook');
              }}>เนื้อหอม Premium Beef Halal </a></li>
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
