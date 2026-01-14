"use client";

type SortOption = "none" | "asc" | "desc";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      className="border rounded-lg px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      aria-label="Sort products by price"
    >
      <option value="none">Sort by price</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
}
