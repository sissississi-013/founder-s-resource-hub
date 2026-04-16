import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { resources, ResourceCategory } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import CategoryFilter from "@/components/CategoryFilter";
import FiaChatbot from "@/components/FiaChatbot";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchCategory = activeCategory === "All" || r.category === activeCategory;
      const matchSearch =
        !search ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-glow/5" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
          >
            Curated for Women Entrepreneurs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight"
          >
            Female Founders
            <br />
            <span className="text-primary">Resource Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
          >
            Grants, investors, communities, and tools — everything you need to build, fund, and grow your business.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </motion.div>
        </div>
      </header>

      {/* Filters + Grid */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
        </div>

        <p className="text-sm text-muted-foreground mb-6 text-center">
          Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No resources found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((resource, i) => (
              <ResourceCard key={resource.id} resource={resource} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground font-body">
          Built with 💖 for female founders everywhere
        </p>
      </footer>

      <FiaChatbot />
    </div>
  );
};

export default Index;
