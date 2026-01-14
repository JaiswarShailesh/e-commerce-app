import { fetchProducts } from "@/lib/api";
import ProductClient from "./ProductClient";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";
import { Suspense } from "react";

async function Products() {
  // fetching product list from server
  const products = await fetchProducts();
  return <ProductClient products={products} />;
}

export default function HomePage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">
        Product Explorer
      </h1>

      <Suspense fallback={<ProductSkeletonGrid />}>
        <Products />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-dynamic";
