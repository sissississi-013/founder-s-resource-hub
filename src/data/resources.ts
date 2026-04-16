export type PageCategory =
  | "grants-vc"
  | "accelerators"
  | "communities-events"
  | "templates-tools";

export interface GrantVC {
  id: string;
  name: string;
  type: "Grant" | "VC Fund" | "Angel Network" | "LP Investor";
  hq: string;
  investmentGeo: string[];
  sectors: string[];
  stage: string[];
  investmentSize: string;
  url: string;
  description: string;
  focusOnWomen: boolean;
}

export interface Accelerator {
  id: string;
  name: string;
  type: "Accelerator" | "Incubator" | "Fellowship";
  location: string;
  duration: string;
  sectors: string[];
  equity: string;
  funding: string;
  url: string;
  description: string;
  focusOnWomen: boolean;
}

export interface CommunityEvent {
  id: string;
  name: string;
  type: "Conference" | "Community" | "Network" | "Summit" | "Meetup";
  location: string;
  date: string;
  endDate?: string;
  eventType: "On-site" | "Online" | "Hybrid";
  url: string;
  description: string;
  focusOnWomen: boolean;
}

export interface TemplateTool {
  id: string;
  name: string;
  type: "Template" | "Tool" | "Platform" | "Course";
  category: string;
  pricing: string;
  url: string;
  description: string;
  tags: string[];
}

// ── Grants & VC Funding ──
export const grantsVCData: GrantVC[] = [
  {
    id: "gv1", name: "Female Founders Fund", type: "VC Fund", hq: "USA",
    investmentGeo: ["USA"], sectors: ["E-commerce", "Fintech", "Digital Health"],
    stage: ["Pre-seed", "Seed"], investmentSize: "$25K–$500K", url: "https://femalefoundersfund.com",
    description: "Early-stage VC fund investing exclusively in female-founded technology companies.", focusOnWomen: true,
  },
  {
    id: "gv2", name: "BBG Ventures", type: "VC Fund", hq: "USA",
    investmentGeo: ["USA"], sectors: ["Consumer", "SaaS", "AI"],
    stage: ["Pre-seed", "Seed"], investmentSize: "$250K–$1M", url: "https://www.bbgventures.com",
    description: "Early-stage fund backing female and diverse founders building consumer tech startups.", focusOnWomen: true,
  },
  {
    id: "gv3", name: "Backstage Capital", type: "VC Fund", hq: "USA",
    investmentGeo: ["USA", "Global"], sectors: ["Sector-Agnostic"],
    stage: ["Pre-seed", "Seed"], investmentSize: "$25K–$500K", url: "https://backstagecapital.com",
    description: "VC firm investing in underrepresented founders including women, people of color, and LGBTQ+.", focusOnWomen: true,
  },
  {
    id: "gv4", name: "Golden Seeds", type: "Angel Network", hq: "USA",
    investmentGeo: ["USA"], sectors: ["Sector-Agnostic"],
    stage: ["Seed", "Early Growth"], investmentSize: "$250K–$3M", url: "https://goldenseeds.com",
    description: "Angel investor network focused on women-led businesses with high growth potential.", focusOnWomen: true,
  },
  {
    id: "gv5", name: "Amber Grant for Women", type: "Grant", hq: "USA",
    investmentGeo: ["USA"], sectors: ["Sector-Agnostic"],
    stage: ["Pre-seed"], investmentSize: "$10K–$25K", url: "https://ambergrantsforwomen.com",
    description: "Monthly $10,000 grant awarded to women-owned businesses. Year-end $25,000 grand prize.", focusOnWomen: true,
  },
  {
    id: "gv6", name: "IFundWomen", type: "Grant", hq: "USA",
    investmentGeo: ["USA"], sectors: ["Sector-Agnostic"],
    stage: ["Pre-seed", "Seed"], investmentSize: "Varies", url: "https://ifundwomen.com",
    description: "Crowdfunding and grants platform with coaching for women entrepreneurs.", focusOnWomen: true,
  },
  {
    id: "gv7", name: "Cartier Women's Initiative", type: "Grant", hq: "France",
    investmentGeo: ["Global"], sectors: ["Impact"],
    stage: ["Seed", "Early Growth"], investmentSize: "$100K", url: "https://www.cartierwomensinitiative.com",
    description: "Annual international entrepreneurship program for women impact entrepreneurs.", focusOnWomen: true,
  },
  {
    id: "gv8", name: "0100 Ventures", type: "VC Fund", hq: "Slovakia",
    investmentGeo: ["Latvia", "Poland", "Serbia", "CEE"],
    sectors: ["Sector-Agnostic"], stage: ["Seed", "Late seed", "Early Growth"],
    investmentSize: "Undisclosed", url: "https://www.vestbee.com/vc-list/0100-ventures",
    description: "Central European VC fund investing across sectors in the CEE region.", focusOnWomen: false,
  },
  {
    id: "gv9", name: "10x Founders", type: "VC Fund", hq: "Germany",
    investmentGeo: ["UK", "USA", "Italy", "Europe"],
    sectors: ["Software", "SaaS"], stage: ["Pre-seed", "Seed", "Late seed", "Early Growth"],
    investmentSize: "€250K–€3M", url: "https://www.vestbee.com/vc-list/10x-founders",
    description: "European VC fund focused on software and SaaS companies.", focusOnWomen: false,
  },
  {
    id: "gv10", name: "360 Capital Partners", type: "VC Fund", hq: "Italy / France",
    investmentGeo: ["UK", "Italy", "Europe"],
    sectors: ["AI", "SaaS", "Fintech", "Deep Tech", "Digital Health", "Enterprise Software"],
    stage: ["Pre-seed", "Seed", "Late seed", "Early Growth", "Growth"],
    investmentSize: "€150K–€5M+", url: "https://www.vestbee.com/vc-list/360-capital-partners",
    description: "European VC investing in AI, SaaS, fintech and deep tech from pre-seed to growth.", focusOnWomen: false,
  },
  {
    id: "gv11", name: "SBA WOSB Program", type: "Grant", hq: "USA",
    investmentGeo: ["USA"], sectors: ["Sector-Agnostic"],
    stage: ["Seed", "Early Growth", "Growth"], investmentSize: "Federal contracts",
    url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contracting-program",
    description: "Federal contracting program helping women-owned small businesses compete for federal contracts.", focusOnWomen: true,
  },
  {
    id: "gv12", name: "2xN", type: "VC Fund", hq: "UK",
    investmentGeo: ["UK", "USA", "Europe"],
    sectors: ["Quantum Computing", "Deep Tech"],
    stage: ["Pre-seed", "Seed", "Late seed", "Early Growth"],
    investmentSize: "€3M–€5M+", url: "https://www.vestbee.com/vc-list/2xn",
    description: "UK-based VC fund focused on quantum computing and deep tech ventures.", focusOnWomen: false,
  },
];

// ── Accelerators & Incubators ──
export const acceleratorsData: Accelerator[] = [
  {
    id: "ac1", name: "Y Combinator", type: "Accelerator", location: "San Francisco, USA",
    duration: "3 months", sectors: ["Sector-Agnostic"], equity: "7%",
    funding: "$500K", url: "https://www.ycombinator.com",
    description: "World's most prestigious startup accelerator. Two batches per year with $500K standard investment.", focusOnWomen: false,
  },
  {
    id: "ac2", name: "Techstars", type: "Accelerator", location: "Multiple cities, Global",
    duration: "3 months", sectors: ["Sector-Agnostic"], equity: "6%",
    funding: "$120K", url: "https://www.techstars.com",
    description: "Worldwide network of accelerators offering mentorship-driven programs.", focusOnWomen: false,
  },
  {
    id: "ac3", name: "500 Global", type: "Accelerator", location: "San Francisco, USA",
    duration: "4 months", sectors: ["Sector-Agnostic"], equity: "5–6%",
    funding: "$150K", url: "https://500.co",
    description: "Global venture capital firm with early-stage accelerator programs in 80+ countries.", focusOnWomen: false,
  },
  {
    id: "ac4", name: "The Vinetta Project", type: "Accelerator", location: "Multiple cities, USA",
    duration: "Varies", sectors: ["Sector-Agnostic"], equity: "None",
    funding: "Pitch competitions", url: "https://www.vinettaproject.com",
    description: "Accelerator and pitch forum dedicated to propelling women-led ventures to investment.", focusOnWomen: true,
  },
  {
    id: "ac5", name: "Women's Startup Lab", type: "Accelerator", location: "Silicon Valley, USA",
    duration: "6 months", sectors: ["Tech"], equity: "Varies",
    funding: "Varies", url: "https://www.womenstartuplab.com",
    description: "Accelerator and community designed specifically for women tech founders.", focusOnWomen: true,
  },
  {
    id: "ac6", name: "MassChallenge", type: "Accelerator", location: "Boston, USA / Global",
    duration: "4 months", sectors: ["Sector-Agnostic"], equity: "Zero equity",
    funding: "$100K+ in prizes", url: "https://masschallenge.org",
    description: "Zero-equity accelerator awarding $100K+ in prizes. Programs in US, UK, Israel, and more.", focusOnWomen: false,
  },
  {
    id: "ac7", name: "Plug and Play", type: "Accelerator", location: "Silicon Valley, USA / Global",
    duration: "3 months", sectors: ["Fintech", "Health", "Mobility", "Supply Chain"],
    equity: "Varies", funding: "Up to $500K",
    url: "https://www.plugandplaytechcenter.com",
    description: "Corporate innovation platform connecting startups with major corporations globally.", focusOnWomen: false,
  },
  {
    id: "ac8", name: "Startupbootcamp", type: "Accelerator", location: "Multiple cities, Europe",
    duration: "3 months", sectors: ["Fintech", "E-commerce", "AI", "IoT"],
    equity: "6–8%", funding: "€15K + perks",
    url: "https://www.startupbootcamp.org",
    description: "Europe's leading industry-focused accelerator with programs in fintech, e-commerce, and AI.", focusOnWomen: false,
  },
  {
    id: "ac9", name: "SheEO / Coralus", type: "Fellowship", location: "Global (Canada, USA, UK, Australia, NZ)",
    duration: "1 year", sectors: ["Impact"], equity: "None",
    funding: "$100K 0% interest loan", url: "https://coralus.world",
    description: "Radical generosity model providing interest-free loans to women and non-binary founders working on world challenges.", focusOnWomen: true,
  },
  {
    id: "ac10", name: "Founders Factory", type: "Incubator", location: "London, UK",
    duration: "6 months", sectors: ["AI", "Fintech", "Health", "Education"],
    equity: "5–7%", funding: "Up to $250K",
    url: "https://foundersfactory.com",
    description: "Venture studio and accelerator backed by corporates like L'Oréal, Aviva, and easyJet.", focusOnWomen: false,
  },
];

// ── Communities & Events ──
export const communitiesEventsData: CommunityEvent[] = [
  {
    id: "ce1", name: "CEE VC SUMMIT 2026", type: "Summit", location: "Warsaw, Poland",
    date: "24 March 2026", endDate: "25 March 2026", eventType: "On-site",
    url: "https://www.vestbee.com/cee-vc-summit",
    description: "Invitation-only event for 250+ VC fund managers in Central & Eastern Europe.", focusOnWomen: false,
  },
  {
    id: "ce2", name: "Tech.eu Summit", type: "Summit", location: "London, UK",
    date: "21 April 2026", endDate: "22 April 2026", eventType: "On-site",
    url: "https://tech.eu/event/2026/summit-london/",
    description: "Europe's premier tech conference connecting founders, investors and innovators.", focusOnWomen: false,
  },
  {
    id: "ce3", name: "Wolves Summit", type: "Conference", location: "Warsaw, Poland",
    date: "21 April 2026", endDate: "22 April 2026", eventType: "On-site",
    url: "https://warsaw.wolvessummit.com/",
    description: "Tech conference & European Startup Ecosystem Awards connecting CEE startups with investors.", focusOnWomen: false,
  },
  {
    id: "ce4", name: "eMerge Americas", type: "Conference", location: "Miami, USA",
    date: "23 April 2026", endDate: "24 April 2026", eventType: "On-site",
    url: "https://emergeamericas.com/",
    description: "Premier tech event connecting the Americas with global innovation and investment.", focusOnWomen: false,
  },
  {
    id: "ce5", name: "SXSW London", type: "Conference", location: "London, UK",
    date: "1 June 2026", endDate: "6 June 2026", eventType: "On-site",
    url: "https://sxswlondon.com/",
    description: "The iconic South by Southwest comes to London — tech, culture, music and innovation.", focusOnWomen: false,
  },
  {
    id: "ce6", name: "Turing Fest", type: "Conference", location: "Edinburgh, UK",
    date: "6 May 2026", endDate: "7 May 2026", eventType: "On-site",
    url: "https://turingfest.com/",
    description: "Multi-track tech conference for product, engineering, marketing and growth leaders.", focusOnWomen: false,
  },
  {
    id: "ce7", name: "TechChill", type: "Conference", location: "Riga, Latvia",
    date: "25 March 2026", endDate: "27 March 2026", eventType: "On-site",
    url: "https://techchill.co/",
    description: "The leading startup and tech event in the Baltics bringing together founders and investors.", focusOnWomen: false,
  },
  {
    id: "ce8", name: "Ellevate Network", type: "Community", location: "Global (Online)",
    date: "Ongoing", eventType: "Online",
    url: "https://www.ellevatenetwork.com",
    description: "Global professional women's network offering community, events, coaching, and career development.", focusOnWomen: true,
  },
  {
    id: "ce9", name: "Chief", type: "Network", location: "USA (Online & In-person)",
    date: "Ongoing", eventType: "Hybrid",
    url: "https://chief.com",
    description: "Private membership network for senior women leaders focused on C-suite connections.", focusOnWomen: true,
  },
  {
    id: "ce10", name: "Dreamers & Doers", type: "Community", location: "USA (Online)",
    date: "Ongoing", eventType: "Online",
    url: "https://www.dreamersanddoers.co",
    description: "Award-winning community and PR firm amplifying extraordinary women entrepreneurs.", focusOnWomen: true,
  },
  {
    id: "ce11", name: "Women Who Startup", type: "Community", location: "Global (Online)",
    date: "Ongoing", eventType: "Online",
    url: "https://www.womenwhostartup.com",
    description: "Community connecting women entrepreneurs with resources, mentors, and each other.", focusOnWomen: true,
  },
  {
    id: "ce12", name: "Startup Grind Global Conference", type: "Conference", location: "San Francisco, USA",
    date: "28 April 2026", endDate: "29 April 2026", eventType: "On-site",
    url: "https://startupgrind.tech/conference/tickets/",
    description: "Powered by Google for Startups, connecting hundreds of thousands of founders worldwide.", focusOnWomen: false,
  },
  {
    id: "ce13", name: "Nordic Tech Week", type: "Conference", location: "Stockholm, Sweden",
    date: "7 September 2026", endDate: "11 September 2026", eventType: "On-site",
    url: "https://www.nordictechweek.org/",
    description: "The biggest week for Nordic tech and innovation bringing together the ecosystem.", focusOnWomen: false,
  },
  {
    id: "ce14", name: "Panathēnea", type: "Summit", location: "Athens, Greece",
    date: "27 May 2026", endDate: "29 May 2026", eventType: "On-site",
    url: "https://www.panathenea.org/",
    description: "Innovation summit in Athens connecting Mediterranean and global tech ecosystems.", focusOnWomen: false,
  },
];

// ── Templates & Tools ──
export const templatesToolsData: TemplateTool[] = [
  {
    id: "tt1", name: "Canva Pro for Startups", type: "Tool",
    category: "Design", pricing: "Free tier available",
    url: "https://www.canva.com",
    description: "Design platform with templates for pitch decks, social media, business cards, and brand kits.",
    tags: ["design", "templates", "branding", "pitch deck"],
  },
  {
    id: "tt2", name: "Notion Startup Templates", type: "Template",
    category: "Project Management", pricing: "Free",
    url: "https://www.notion.so/templates",
    description: "Free workspace templates for project management, fundraising trackers, OKRs, and team wikis.",
    tags: ["project management", "organization", "fundraising"],
  },
  {
    id: "tt3", name: "Slidebean Pitch Deck Templates", type: "Template",
    category: "Pitch Deck", pricing: "Freemium",
    url: "https://slidebean.com/templates",
    description: "AI-powered pitch deck builder with templates inspired by Airbnb, Uber, and Buffer decks.",
    tags: ["pitch deck", "AI", "design"],
  },
  {
    id: "tt4", name: "HelloAlice", type: "Platform",
    category: "Funding & Resources", pricing: "Free",
    url: "https://helloalice.com",
    description: "Free platform connecting small business owners to funding, resources, and a supportive community.",
    tags: ["funding", "resources", "community"],
  },
  {
    id: "tt5", name: "SCORE Mentoring", type: "Platform",
    category: "Mentoring", pricing: "Free",
    url: "https://www.score.org",
    description: "Free business mentoring and education with workshops, templates, and one-on-one mentoring.",
    tags: ["mentoring", "workshops", "free"],
  },
  {
    id: "tt6", name: "Startup Financial Model Templates", type: "Template",
    category: "Financial", pricing: "Free & Paid",
    url: "https://www.basetemplates.com",
    description: "SaaS financial model spreadsheets, cap table templates, and revenue projection tools.",
    tags: ["financial model", "spreadsheet", "SaaS"],
  },
  {
    id: "tt7", name: "DocSend Pitch Deck Analytics", type: "Tool",
    category: "Pitch Deck", pricing: "Freemium",
    url: "https://www.docsend.com",
    description: "Share and track pitch decks with analytics on investor engagement — see who viewed what slides.",
    tags: ["pitch deck", "analytics", "investor relations"],
  },
  {
    id: "tt8", name: "Carta", type: "Tool",
    category: "Equity Management", pricing: "Paid",
    url: "https://carta.com",
    description: "Cap table management, 409A valuations, and equity plan administration for startups.",
    tags: ["cap table", "equity", "legal"],
  },
  {
    id: "tt9", name: "Crunchbase", type: "Tool",
    category: "Research", pricing: "Freemium",
    url: "https://www.crunchbase.com",
    description: "Database of companies, investors, and funding rounds. Essential for investor research and outreach.",
    tags: ["research", "investors", "database"],
  },
  {
    id: "tt10", name: "Loom", type: "Tool",
    category: "Communication", pricing: "Free tier available",
    url: "https://www.loom.com",
    description: "Quick video messaging tool. Perfect for async pitch videos, product demos, and team updates.",
    tags: ["video", "pitch", "communication"],
  },
];
