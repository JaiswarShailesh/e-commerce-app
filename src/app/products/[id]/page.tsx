import Image from "next/image";
import { fetchProductById } from "@/lib/api";

interface Props {
  params: { id: string };
}

export default async function ProductDetails({ params }: Props) {
  const product = await fetchProductById(params.id);

  return (
    <main className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 mb-2">{product.category}</p>
        <p className="font-semibold text-lg mb-4">
          ₹ {product.price}
        </p>
        <p className="text-sm text-gray-700">
          {product.description}
        </p>
      </div>
    </main>
  );
}
