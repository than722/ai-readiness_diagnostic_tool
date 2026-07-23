export const siteConfig = {
  name: "AI Readiness Platform",

  description:
    "Discover your AI Readiness Score and receive personalized recommendations.",

  url: "http://localhost:3000",

  links: {
    github: "",
    linkedin: "",
  },

  navigation: [
    {
      title: "Features",
      href: "#features",
    },

    {
      title: "How It Works",
      href: "#how",
    },

    {
      title: "FAQ",
      href: "#faq",
    },
  ],
};

export type SiteConfig = typeof siteConfig;