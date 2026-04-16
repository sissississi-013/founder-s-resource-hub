import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import DataTable from "@/components/DataTable";
import FiaChatbot from "@/components/FiaChatbot";
import { templatesToolsData, TemplateTool } from "@/data/resources";

const columns = [
  {
    key: "name",
    label: "Name",
    className: "min-w-[200px]",
    render: (item: TemplateTool) => (
      <div>
        <div className="font-display font-bold text-foreground">{item.name}</div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
      </div>
    ),
  },
  {
    key: "type",
    label: "Type",
    render: (item: TemplateTool) => (
      <Badge variant="secondary" className="text-xs font-body">{item.type}</Badge>
    ),
  },
  {
    key: "category",
    label: "Category",
    render: (item: TemplateTool) => <span className="text-foreground text-xs">{item.category}</span>,
  },
  {
    key: "pricing",
    label: "Pricing",
    render: (item: TemplateTool) => (
      <Badge
        variant="outline"
        className={`text-xs font-body ${item.pricing === "Free" ? "border-green-300 text-green-700" : ""}`}
      >
        {item.pricing}
      </Badge>
    ),
  },
  {
    key: "tags",
    label: "Tags",
    className: "min-w-[150px]",
    render: (item: TemplateTool) => (
      <div className="flex flex-wrap gap-1">
        {item.tags.slice(0, 3).map((t) => (
          <Badge key={t} variant="outline" className="text-xs font-body">{t}</Badge>
        ))}
      </div>
    ),
  },
];

const filterOptions = [
  { key: "type" as keyof TemplateTool, label: "Type", values: ["Template", "Tool", "Platform", "Course"] },
  { key: "category" as keyof TemplateTool, label: "Category", values: ["Design", "Pitch Deck", "Project Management", "Financial", "Funding & Resources", "Mentoring", "Equity Management", "Research", "Communication"] },
];

const TemplatesToolsPage = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Pitch Deck Templates & <span className="text-primary">Tools</span>
        </h1>
        <p className="text-muted-foreground font-body">
          Access pitch deck builders, financial models, equity management tools, and more founder resources.
        </p>
      </motion.div>
      <DataTable
        data={templatesToolsData}
        columns={columns}
        searchKeys={["name", "description", "tags", "category"]}
        searchPlaceholder="Search templates, tools..."
        filterOptions={filterOptions}
        getUrl={(item) => item.url}
      />
    </div>
    <FiaChatbot />
  </div>
);

export default TemplatesToolsPage;
