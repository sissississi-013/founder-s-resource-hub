import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import DataTable from "@/components/DataTable";
import FiaChatbot from "@/components/FiaChatbot";
import { grantsVCData, GrantVC } from "@/data/resources";

const columns = [
  {
    key: "name",
    label: "Name",
    className: "min-w-[200px]",
    render: (item: GrantVC) => (
      <div>
        <div className="font-display font-bold text-foreground">{item.name}</div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
      </div>
    ),
  },
  {
    key: "type",
    label: "Type",
    render: (item: GrantVC) => (
      <Badge variant="secondary" className="text-xs font-body">{item.type}</Badge>
    ),
  },
  {
    key: "hq",
    label: "HQ",
    render: (item: GrantVC) => <span className="text-foreground">{item.hq}</span>,
  },
  {
    key: "sectors",
    label: "Sectors",
    className: "min-w-[150px]",
    render: (item: GrantVC) => (
      <div className="flex flex-wrap gap-1">
        {item.sectors.slice(0, 2).map((s) => (
          <Badge key={s} variant="outline" className="text-xs font-body">{s}</Badge>
        ))}
        {item.sectors.length > 2 && (
          <span className="text-xs text-muted-foreground">+{item.sectors.length - 2}</span>
        )}
      </div>
    ),
  },
  {
    key: "stage",
    label: "Stage",
    render: (item: GrantVC) => (
      <div className="flex flex-wrap gap-1">
        {item.stage.slice(0, 1).map((s) => (
          <span key={s} className="text-xs text-foreground">{s}</span>
        ))}
        {item.stage.length > 1 && (
          <span className="text-xs text-muted-foreground">+{item.stage.length - 1}</span>
        )}
      </div>
    ),
  },
  {
    key: "investmentSize",
    label: "Investment Size",
    render: (item: GrantVC) => <span className="text-foreground font-medium text-xs">{item.investmentSize}</span>,
  },
];

const filterOptions = [
  { key: "type" as keyof GrantVC, label: "Type", values: ["Grant", "VC Fund", "Angel Network", "LP Investor"] },
  { key: "focusOnWomen" as keyof GrantVC, label: "Women-focused", values: ["Yes", "No"] },
];

const GrantsVCPage = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Grants & VC <span className="text-primary">Funding</span>
        </h1>
        <p className="text-muted-foreground font-body">
          Explore grants, VC funds, angel networks, and LP investors. Filter by stage, sector, and women-focused criteria.
        </p>
      </motion.div>
      <DataTable
        data={grantsVCData}
        columns={columns}
        searchKeys={["name", "description", "sectors", "hq"]}
        searchPlaceholder="Search funds, grants, investors..."
        filterOptions={filterOptions}
        getUrl={(item) => item.url}
      />
    </div>
    <FiaChatbot />
  </div>
);

export default GrantsVCPage;
