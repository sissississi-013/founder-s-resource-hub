import { useState, useMemo } from "react";
import { Search, ExternalLink, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Column<T> {
  key: string;
  label: string;
  render: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKeys: (keyof T)[];
  searchPlaceholder?: string;
  filterOptions?: { key: keyof T; label: string; values: string[] }[];
  getUrl?: (item: T) => string;
}

function DataTable<T extends { id: string }>({
  data,
  columns,
  searchKeys,
  searchPlaceholder = "Search...",
  filterOptions,
  getUrl,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return data.filter((item) => {
      const matchSearch =
        !search ||
        searchKeys.some((key) => {
          const val = item[key];
          if (typeof val === "string") return val.toLowerCase().includes(search.toLowerCase());
          if (Array.isArray(val)) return val.some((v) => String(v).toLowerCase().includes(search.toLowerCase()));
          return false;
        });

      const matchFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        const itemVal = item[key as keyof T];
        if (typeof itemVal === "string") return itemVal === value;
        if (Array.isArray(itemVal)) return itemVal.includes(value);
        if (typeof itemVal === "boolean") return value === "Yes" ? itemVal : !itemVal;
        return true;
      });

      return matchSearch && matchFilters;
    });
  }, [data, search, filters, searchKeys]);

  return (
    <div>
      {/* Search & Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        {filterOptions && filterOptions.length > 0 && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-body font-medium transition-all ${
              showFilters || Object.values(filters).some(Boolean)
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <Filter className="w-4 h-4" />
            Filters
            {Object.values(filters).filter(Boolean).length > 0 && (
              <Badge variant="secondary" className="ml-1 text-xs">
                {Object.values(filters).filter(Boolean).length}
              </Badge>
            )}
          </button>
        )}
      </div>

      {/* Filter dropdowns */}
      {showFilters && filterOptions && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-border"
        >
          {filterOptions.map((filter) => (
            <select
              key={String(filter.key)}
              value={filters[String(filter.key)] || ""}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, [String(filter.key)]: e.target.value }))
              }
              className="px-3 py-2 rounded-lg border border-border bg-card text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">{filter.label}</option>
              {filter.values.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          ))}
          {Object.values(filters).some(Boolean) && (
            <button
              onClick={() => setFilters({})}
              className="px-3 py-2 text-sm font-body text-primary hover:text-primary/80 transition-colors"
            >
              Clear all
            </button>
          )}
        </motion.div>
      )}

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4 font-body">
        Showing {filtered.length} of {data.length} results
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`text-left px-4 py-3 font-body font-semibold text-muted-foreground uppercase text-xs tracking-wider ${col.className || ""}`}
                >
                  {col.label}
                </th>
              ))}
              <th className="w-20"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-12 text-muted-foreground font-body">
                  No results found. Try adjusting your search or filters.
                </td>
              </tr>
            ) : (
              filtered.map((item, i) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="border-t border-border hover:bg-muted/30 transition-colors group"
                >
                  {columns.map((col) => (
                    <td key={col.key} className={`px-4 py-4 font-body ${col.className || ""}`}>
                      {col.render(item)}
                    </td>
                  ))}
                  <td className="px-4 py-4">
                    {getUrl && (
                      <a
                        href={getUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-xs font-body font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      >
                        Details
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
