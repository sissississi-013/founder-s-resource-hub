export type ResourceCategory =
  | "Grants & Funding"
  | "VC & Investors"
  | "Communities & Networks"
  | "Templates & Tools";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  url: string;
  tags: string[];
}

export const categories: ResourceCategory[] = [
  "Grants & Funding",
  "VC & Investors",
  "Communities & Networks",
  "Templates & Tools",
];

export const categoryIcons: Record<ResourceCategory, string> = {
  "Grants & Funding": "💰",
  "VC & Investors": "🚀",
  "Communities & Networks": "🤝",
  "Templates & Tools": "🛠️",
};

export const resources: Resource[] = [
  {
    id: "1",
    title: "Amber Grant for Women",
    description: "Monthly $10,000 grant awarded to women-owned businesses. One winner each month is eligible for the year-end $25,000 grant.",
    category: "Grants & Funding",
    url: "https://ambergrantsforwomen.com",
    tags: ["grant", "monthly", "small business"],
  },
  {
    id: "2",
    title: "IFundWomen",
    description: "Crowdfunding platform and coaching for women entrepreneurs. Access grants, capital, and expert business coaching.",
    category: "Grants & Funding",
    url: "https://ifundwomen.com",
    tags: ["crowdfunding", "coaching", "grants"],
  },
  {
    id: "3",
    title: "Cartier Women's Initiative",
    description: "Annual international entrepreneurship program for women impact entrepreneurs. Offers funding, mentoring, and networking.",
    category: "Grants & Funding",
    url: "https://www.cartierwomensinitiative.com",
    tags: ["international", "impact", "mentoring"],
  },
  {
    id: "4",
    title: "SBA Women-Owned Small Business",
    description: "Federal contracting program helping women-owned small businesses compete for federal contracts.",
    category: "Grants & Funding",
    url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contracting-program",
    tags: ["federal", "contracts", "SBA"],
  },
  {
    id: "5",
    title: "Female Founders Fund",
    description: "Early-stage VC fund investing in female-founded technology companies across e-commerce, health, and fintech.",
    category: "VC & Investors",
    url: "https://femalefoundersfund.com",
    tags: ["early-stage", "tech", "VC"],
  },
  {
    id: "6",
    title: "BBG Ventures",
    description: "Early-stage fund backing female and diverse founders building consumer tech startups.",
    category: "VC & Investors",
    url: "https://www.bbgventures.com",
    tags: ["consumer tech", "diverse", "seed"],
  },
  {
    id: "7",
    title: "Backstage Capital",
    description: "VC firm investing in underrepresented founders including women, people of color, and LGBTQ+ entrepreneurs.",
    category: "VC & Investors",
    url: "https://backstagecapital.com",
    tags: ["underrepresented", "inclusive", "VC"],
  },
  {
    id: "8",
    title: "Golden Seeds",
    description: "Angel investor network focused on women-led businesses. Offers funding from $250K to $3M.",
    category: "VC & Investors",
    url: "https://goldenseeds.com",
    tags: ["angel", "women-led", "growth"],
  },
  {
    id: "9",
    title: "Ellevate Network",
    description: "Global professional women's network offering community, events, coaching, and career development resources.",
    category: "Communities & Networks",
    url: "https://www.ellevatenetwork.com",
    tags: ["networking", "professional", "global"],
  },
  {
    id: "10",
    title: "Women Who Startup",
    description: "Community connecting women entrepreneurs with resources, mentors, and each other to build successful companies.",
    category: "Communities & Networks",
    url: "https://www.womenwhostartup.com",
    tags: ["startup", "mentors", "community"],
  },
  {
    id: "11",
    title: "Dreamers & Doers",
    description: "Award-winning community and PR firm amplifying extraordinary women entrepreneurs through collaboration.",
    category: "Communities & Networks",
    url: "https://www.dreamersanddoers.co",
    tags: ["PR", "collaboration", "entrepreneurs"],
  },
  {
    id: "12",
    title: "Chief",
    description: "Private membership network for senior women leaders focused on strengthening leadership and cross-functional connections.",
    category: "Communities & Networks",
    url: "https://chief.com",
    tags: ["leadership", "executive", "membership"],
  },
  {
    id: "13",
    title: "Canva Pro for Startups",
    description: "Free design platform with templates for pitch decks, social media, business cards, and brand kits.",
    category: "Templates & Tools",
    url: "https://www.canva.com",
    tags: ["design", "templates", "branding"],
  },
  {
    id: "14",
    title: "Notion Startup Templates",
    description: "Free workspace templates for project management, fundraising trackers, OKRs, and team wikis.",
    category: "Templates & Tools",
    url: "https://www.notion.so/templates",
    tags: ["project management", "organization", "free"],
  },
  {
    id: "15",
    title: "HelloAlice",
    description: "Free platform connecting small business owners to funding, resources, and a supportive community.",
    category: "Templates & Tools",
    url: "https://helloalice.com",
    tags: ["funding", "resources", "platform"],
  },
  {
    id: "16",
    title: "SCORE Mentoring",
    description: "Free business mentoring and education. Offers workshops, templates, and one-on-one mentoring for entrepreneurs.",
    category: "Templates & Tools",
    url: "https://www.score.org",
    tags: ["mentoring", "workshops", "free"],
  },
];
