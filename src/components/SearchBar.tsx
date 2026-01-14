"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black/10 outline-none"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search products"
    />
  );
}
