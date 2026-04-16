import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import DataTable from "@/components/DataTable";
import FiaChatbot from "@/components/FiaChatbot";
import { acceleratorsData, Accelerator } from "@/data/resources";

const columns = [
  {
    key: "name",
    label: "Name",
    className: "min-w-[200px]",
    render: (item: Accelerator) => (
      <div>
        <div className="font-display font-bold text-foreground">{item.name}</div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
      </div>
    ),
  },
  {
    key: "type",
    label: "Type",
    render: (item: Accelerator) => (
      <Badge variant="secondary" className="text-xs font-body">{item.type}</Badge>
    ),
  },
  {
    key: "location",
    label: "Location",
    render: (item: Accelerator) => <span className="text-foreground text-xs">{item.location}</span>,
  },
  {
    key: "duration",
    label: "Duration",
    render: (item: Accelerator) => <span className="text-foreground text-xs">{item.duration}</span>,
  },
  {
    key: "equity",
    label: "Equity",
    render: (item: Accelerator) => <span className="text-foreground text-xs">{item.equity}</span>,
  },
  {
    key: "funding",
    label: "Funding",
    render: (item: Accelerator) => <span className="text-foreground font-medium text-xs">{item.funding}</span>,
  },
];

const filterOptions = [
  { key: "type" as keyof Accelerator, label: "Type", values: ["Accelerator", "Incubator", "Fellowship"] },
  { key: "focusOnWomen" as keyof Accelerator, label: "Women-focused", values: ["Yes", "No"] },
];

const AcceleratorsPage = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Accelerators & <span className="text-primary">Incubators</span>
        </h1>
        <p className="text-muted-foreground font-body">
          Find programs to fast-track your startup. Compare equity terms, funding, and duration.
        </p>
      </motion.div>
      <DataTable
        data={acceleratorsData}
        columns={columns}
        searchKeys={["name", "description", "sectors", "location"]}
        searchPlaceholder="Search accelerators, incubators..."
        filterOptions={filterOptions}
        getUrl={(item) => item.url}
      />
    </div>
    <FiaChatbot />
  </div>
);

export default AcceleratorsPage;
