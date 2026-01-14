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
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain h-40 w-full"
        />
        <h3 className="font-medium mt-2 line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-semibold">₹ {product.price}</p>

      <button
        onClick={() => toggleFavorite(product.id)}
        className="text-sm border rounded px-2 py-1 mt-auto"
      >
        {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}
