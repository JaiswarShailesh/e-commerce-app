import { fetchProducts } from "@/lib/api";
import ProductClient from "./ProductClient";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";
import { Suspense } from "react";

async function Products() {
  const products = await fetchProducts();
  return <ProductClient products={products} />;
}

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Product Explorer
      </h1>

      <Suspense fallback={<ProductSkeletonGrid />}>
        <Products />
      </Suspense>
    </main>
  );
}
