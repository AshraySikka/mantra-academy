import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notices' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    pinned: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5).default(5),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { notices, testimonials };