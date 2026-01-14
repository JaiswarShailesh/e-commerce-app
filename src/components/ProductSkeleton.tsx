export default function ProductSkeleton() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="h-40 bg-gray-200 rounded mb-3" />
      <div className="h-4 bg-gray-200 rounded mb-2" />
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/3" />
    </div>
  );
}
