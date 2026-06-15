import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    image: z.string().optional(),
    author: z.string().default("Expert IRVE Alpes-Maritimes"),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = {
  guides: guidesCollection,
};
