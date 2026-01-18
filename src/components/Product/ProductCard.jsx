import { MessageCircle } from "lucide-react";

export default function ProductCard({ product }) {
  if (!product.active) return null;

  const {
    name,
    description,
    weight,
    price,
    image,
    promo,
    contact,
  } = product;

  const messengerLink = `https://m.me/?text=${encodeURIComponent(
    contact?.messengerText || name
  )}`;

  return (
    <div className="group relative rounded-2xl bg-zinc-900/90 border border-white/5 overflow-hidden hover:border-rose-500/40 transition">

      {/* Promo badge */}
      {promo?.label && (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-rose-600 px-3 py-1 text-xs font-medium text-white shadow">
          {promo.label}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-square flex items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-900">
        <img
          src={image}
          alt={name}
          className="w-4/5 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-base font-semibold text-white leading-tight">
          {name}
        </h3>

        <p className="text-sm text-zinc-400">{description}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">{weight}</span>

          {price ? (
            <span className="text-lg font-semibold text-rose-400">
              {price} บาท
            </span>
          ) : (
            <span className="text-sm text-zinc-400 italic">
              สอบถามราคา
            </span>
          )}
        </div>

        {/* Action */}
        <a
          href={messengerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600/90 py-2.5 text-sm font-medium text-white hover:bg-rose-600 transition"
        >
          <MessageCircle size={16} />
          สอบถามสินค้า
        </a>
      </div>
    </div>
  );
}
