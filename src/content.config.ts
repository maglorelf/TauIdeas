import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
});

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.{md,mdx}",
  }),
});

const careers = defineCollection({
  loader: glob({
    base: "./src/content/careers",
    pattern: "**/*.{md,mdx}",
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
});

const integrations = defineCollection({
  loader: glob({
    base: "./src/content/integrations",
    pattern: "**/*.{md,mdx}",
  }),
});

const homepage = defineCollection({
  loader: glob({
    base: "./src/content/homepage",
    pattern: "**/*.{md,mdx}",
  }),
});

const contact = defineCollection({
  loader: glob({
    base: "./src/content/contact",
    pattern: "**/*.{md,mdx}",
  }),
});

const pricing = defineCollection({
  loader: glob({
    base: "./src/content/pricing",
    pattern: "**/*.{md,mdx}",
  }),
});

const howItWorks = defineCollection({
  loader: glob({
    base: "./src/content/how-it-works",
    pattern: "**/*.{md,mdx}",
  }),
});

const aboutComplex = defineCollection({
  loader: glob({
    base: "./src/content/about-complex",
    pattern: "**/*.{md,mdx}",
  }),
});

const authors = defineCollection({
  loader: glob({
    base: "./src/content/authors",
    pattern: "**/*.json",
  }),
});

export const collections = {
  blog,
  pages,
  careers,
  projects,
  integrations,
  homepage,
  contact,
  pricing,
  "how-it-works": howItWorks,
  "about-complex": aboutComplex,
  authors,
};