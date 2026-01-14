"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { useFavorites } from "@/hooks/useFavorites";

import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import FavoritesToggle from "@/components/FavoritesToggle";
import SortSelect from "@/components/SortSelect";

export default function ProductClient({ products }: { products: Product[] }) {
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

      const matchesCategory =
        category === "all" || p.category === category;

      const matchesFavorites =
        !showFavorites || favorites.includes(p.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    })
    .slice()
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <>
      {/* Filters */}
      <div className="bg-white dark:bg-neutral-900 border rounded-xl p-4 mb-6 shadow-sm">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <SearchBar value={search} onChange={setSearch} />

          <CategoryFilter
            value={category}
            categories={categories}
            onChange={setCategory}
          />

          <FavoritesToggle
            enabled={showFavorites}
            onToggle={() => setShowFavorites((prev) => !prev)}
          />

          <SortSelect value={sort} onChange={setSort} />
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
