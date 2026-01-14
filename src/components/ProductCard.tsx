"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/useFavorites"; 

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="group rounded-xl border bg-white dark:bg-neutral-900 p-4 shadow-sm hover:shadow-md transition">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain h-44 w-full transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="font-medium leading-snug line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      <p className="font-semibold text-lg mt-1">₹ {product.price}</p>

      <button
        onClick={() => toggleFavorite(product.id)}
        className="text-sm border rounded px-2 py-1 mt-auto"
      >
        {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}
