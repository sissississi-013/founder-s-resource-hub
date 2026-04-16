import { ResourceCategory, categories, categoryIcons } from "@/data/resources";

interface CategoryFilterProps {
  active: ResourceCategory | "All";
  onSelect: (category: ResourceCategory | "All") => void;
}

const CategoryFilter = ({ active, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect("All")}
        className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
          active === "All"
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-secondary text-secondary-foreground hover:bg-accent"
        }`}
      >
        All Resources
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
            active === cat
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          }`}
        >
          {categoryIcons[cat]} {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
