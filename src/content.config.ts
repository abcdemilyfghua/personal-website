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

const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['eats', 'cafes-sweets', 'outside', 'culture', 'bookstores', 'landmarks']),
    collection: z.enum(['gt', 'home', 'sissy']).optional(),
    rating: z.number().min(0).max(10),
    address: z.string(),
    city: z.string(),
    lat: z.number(),
    lng: z.number(),
    notes: z.string().optional(),
    img: z.string().optional(),
    mustReturn: z.boolean().default(false),
  }),
});

export const collections = { blog, places };
