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

export const collections = { notices };
