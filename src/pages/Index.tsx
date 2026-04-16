import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Rocket, Users, FileText, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import FiaChatbot from "@/components/FiaChatbot";

const categories = [
  {
    title: "Grants & VC Funding",
    description: "Discover grants, VC funds, angel networks, and LP investors actively funding female founders.",
    icon: TrendingUp,
    path: "/grants-vc",
    count: 12,
    color: "from-primary/20 to-pink-glow/20",
  },
  {
    title: "Accelerators & Incubators",
    description: "Find accelerators, incubators, and fellowships to fast-track your startup growth.",
    icon: Rocket,
    path: "/accelerators",
    count: 10,
    color: "from-pink-glow/20 to-primary/10",
  },
  {
    title: "Communities & Events",
    description: "Join networks, attend summits, and connect with women entrepreneurs worldwide.",
    icon: Users,
    path: "/communities-events",
    count: 14,
    color: "from-primary/10 to-pink-soft/30",
  },
  {
    title: "Pitch Deck Templates & Tools",
    description: "Access pitch deck builders, financial models, equity tools, and founder resources.",
    icon: FileText,
    path: "/templates-tools",
    count: 10,
    color: "from-pink-soft/30 to-primary/20",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-glow/5" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Curated for Women Entrepreneurs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight tracking-tight"
          >
            The Resource Hub for
            <br />
            <span className="text-primary">Female Founders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            A comprehensive database of grants, investors, accelerators, communities, events, and tools —
            everything you need to build, fund, and grow your business.
          </motion.p>

          {/* Category Cards */}
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto text-left">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Link
                  to={cat.path}
                  className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} mb-4`}>
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {cat.description}
                  </p>
                  <span className="text-xs font-medium text-primary/70">
                    {cat.count} resources →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

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
