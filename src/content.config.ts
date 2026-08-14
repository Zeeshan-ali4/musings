import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(200),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string().min(1)).min(1),
    draft: z.boolean().default(false),
    hero: z.object({ src: z.string(), alt: z.string() }).optional(),
  }),
});

export const collections = { blog };
