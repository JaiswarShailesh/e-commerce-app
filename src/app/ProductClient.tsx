"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { useFavorites } from "@/hooks/useFavorites";

interface Props {
  products: Product[];
}

export default function ProductClient({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites } = useFavorites();

  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || p.category === category;

    const matchesFavorites =
      !showFavorites || favorites.includes(p.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={() => setShowFavorites((prev) => !prev)}
          className="border rounded px-3 py-2"
        >
          {showFavorites ? "Show All" : "Show Favorites"}
        </button>
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
