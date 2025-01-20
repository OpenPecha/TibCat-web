export const SortSelect = ({ sortBy, setSortBy }) => (
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border rounded-lg px-4 py-2 bg-transparent ring-0 outline-none text-sm font-medium"
  >
    <option value="date">Sort by: Date</option>
    <option value="size">Sort by: Size</option>
    <option value="file_type">Sort by: File Type</option>
  </select>
);
