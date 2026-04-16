import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Resource, categoryIcons } from "@/data/resources";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const ResourceCard = ({ resource, index }: ResourceCardProps) => {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group block rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{categoryIcons[resource.category]}</span>
            <span className="text-xs font-medium text-muted-foreground font-body uppercase tracking-wide">
              {resource.category}
            </span>
          </div>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
            {resource.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            {resource.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-body">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>
    </motion.a>
  );
};

export default ResourceCard;
