import { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  if (!id || isNaN(Number(id))) {
    throw new Error("Invalid product id");
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json(); 
}
