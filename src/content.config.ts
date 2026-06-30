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

const seo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seo' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalOverride: z.string().optional(),
    schemaJson: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const landingPages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landing-pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pageType: z.enum(['service', 'location', 'other']).default('other'),
    heroHeading: z.string(),
    heroSubtext: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
    schemaJson: z.string().optional(),
  }),
});

export const collections = { notices, testimonials, seo, blog, landingPages };