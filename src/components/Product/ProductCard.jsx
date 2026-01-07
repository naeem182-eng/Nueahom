const ProductCard = ({ product }) => {
  const lineUrl = `https://line.me/R/ti/p/@ชื่อไลน์ร้าน?text=${encodeURIComponent(
    product.orderMessage
  )}`;

  return (
   <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition">
  <div className="relative">
    <img
      src={product.image}
      className="w-full h-56 object-cover group-hover:scale-105 transition"
    />

    {/* Promo */}
    {product.promo && (
      <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
        {product.promo}
      </span>
    )}
  </div>

  <div className="p-5">
    <h3 className="text-lg font-semibold text-dark mb-1">
      {product.name}
    </h3>

    <p className="text-sm text-gray-500 mb-4">
      {product.unit}
    </p>

    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-primary">
        {product.price} ฿
      </span>

      <a
        href={lineUrl}
        target="_blank"
        className="bg-dark text-white text-sm px-4 py-2 rounded-full hover:bg-primary transition"
      >
        สั่งซื้อ
      </a>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
