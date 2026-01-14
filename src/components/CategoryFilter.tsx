"use client";

interface Props {
  value: string;
  categories: string[];
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  value,
  categories,
  onChange,
}: Props) {
  return (
    <select
      className="border rounded-lg px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Filter by category"
    >
      <option value="all">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
