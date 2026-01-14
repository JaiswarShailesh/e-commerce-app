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
  const [sort, setSort] = useState<"none" | "asc" | "desc">("none");

  const { favorites } = useFavorites();

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products
    .filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "all" || p.category === category;

      const matchesFavorites = !showFavorites || favorites.includes(p.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    })
    .slice() // 👈 prevent mutation
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <div className="bg-white dark:bg-neutral-900 border rounded-xl p-4 mb-6 shadow-sm">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <input
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black/10 outline-none"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category */}
          <select
            className="border rounded-lg px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Favorites */}
          <button
            onClick={() => setShowFavorites((prev) => !prev)}
            className="border rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
          >
            {showFavorites ? "Show All" : "Show Favorites"}
          </button>

          {/* Sort */}
          <select
            className="border rounded-lg px-3 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            aria-label="Sort products by price"
          >
            <option value="none">Sort by price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
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
