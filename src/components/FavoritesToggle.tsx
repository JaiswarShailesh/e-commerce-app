"use client";

interface Props {
  enabled: boolean;
  onToggle: () => void;
}

export default function FavoritesToggle({ enabled, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="border rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
      aria-pressed={enabled}
      aria-label="Toggle favorites filter"
    >
      {enabled ? "Show All" : "Show Favorites"}
    </button>
  );
}
