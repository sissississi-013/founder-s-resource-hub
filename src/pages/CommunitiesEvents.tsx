import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import DataTable from "@/components/DataTable";
import FiaChatbot from "@/components/FiaChatbot";
import { communitiesEventsData, CommunityEvent } from "@/data/resources";

const columns = [
  {
    key: "name",
    label: "Event / Community",
    className: "min-w-[220px]",
    render: (item: CommunityEvent) => (
      <div>
        <div className="font-display font-bold text-foreground">{item.name}</div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
      </div>
    ),
  },
  {
    key: "type",
    label: "Type",
    render: (item: CommunityEvent) => (
      <Badge variant="secondary" className="text-xs font-body">{item.type}</Badge>
    ),
  },
  {
    key: "location",
    label: "Location",
    render: (item: CommunityEvent) => <span className="text-foreground text-xs">{item.location}</span>,
  },
  {
    key: "date",
    label: "Date",
    render: (item: CommunityEvent) => (
      <span className="text-foreground text-xs">
        {item.date}
        {item.endDate && ` – ${item.endDate}`}
      </span>
    ),
  },
  {
    key: "eventType",
    label: "Format",
    render: (item: CommunityEvent) => (
      <Badge
        variant="outline"
        className={`text-xs font-body ${
          item.eventType === "Online" ? "border-green-300 text-green-700" :
          item.eventType === "Hybrid" ? "border-blue-300 text-blue-700" : ""
        }`}
      >
        {item.eventType}
      </Badge>
    ),
  },
];

const filterOptions = [
  { key: "type" as keyof CommunityEvent, label: "Type", values: ["Conference", "Community", "Network", "Summit", "Meetup"] },
  { key: "eventType" as keyof CommunityEvent, label: "Format", values: ["On-site", "Online", "Hybrid"] },
  { key: "focusOnWomen" as keyof CommunityEvent, label: "Women-focused", values: ["Yes", "No"] },
];

const CommunitiesEventsPage = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Communities & <span className="text-primary">Events</span>
        </h1>
        <p className="text-muted-foreground font-body">
          Discover conferences, summits, and communities. Connect with founders and investors worldwide.
        </p>
      </motion.div>
      <DataTable
        data={communitiesEventsData}
        columns={columns}
        searchKeys={["name", "description", "location"]}
        searchPlaceholder="Search events, communities..."
        filterOptions={filterOptions}
        getUrl={(item) => item.url}
      />
    </div>
    <FiaChatbot />
  </div>
);

export default CommunitiesEventsPage;
