import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.number(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };