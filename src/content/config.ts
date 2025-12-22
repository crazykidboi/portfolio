import { glob } from "astro/loaders";
import { z, reference, defineCollection } from "astro:content";
import { Image } from 'astro:assets';
import { iframe } from "motion/react-client";

const articles = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/articles" }),
    schema: ({ image }) => z.object({
        coverAlt: z.string(),
        title: z.string(),
        slug: z.string(),
        snippet: z.string(),
        category: z.string(),
        pubDate: z.coerce.date(),
        readingDuration: z.number(),
        originalLink: z.string().url(),
        isDraft: z.boolean().default(false),
        updatedDate: z.coerce.date().optional(),
        mainRole: z.string().default('Designer'),
        relatedArticles: z.array(reference('articles')).optional(),
        cover: z.string(),
    }),
});

export const collections = { articles };
