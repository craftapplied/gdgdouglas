import { defineCollection, reference, z } from 'astro:content';

const regexImgFile = /[a-zA-Z\-\_]+\.(jpeg|jpg|png|gif)/i;

const person = z.object({
  name: z.string(),
  email: z.string().email().optional(),
  twitter: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  avatar: z.string().regex(regexImgFile).optional(),
  role: z
    .enum(['organiser', 'contributor', 'speaker'])
    .array()
    .default(['contributor']),
  company: z.string().trim().optional(),
  intro: z.string().optional(),
});

const event = z.object({
  status: z.enum(['published', 'draft']).default('published'),
  title: z.string(),
  desc: z.string(),
  speakers: z.array(reference('people')),
  time: z.object({
    start: z.date(),
    duration: z.number(), // unit: hour
  }),
  location: z.tuple([z.string().trim(), z.string().url()]),
  type: z.enum(['Speaker Session']),
  topic: z.enum(['Tech Talk']),
  thumbnail: z.string().regex(regexImgFile).optional(),
  cta: z
    .union([z.tuple([z.string().trim(), z.string().url()]), z.string().url()])
    .optional(),
  attachment: z.tuple([z.string().trim(), z.string().url()]).optional(),
});

export const collections = {
  people: defineCollection({ type: 'content', schema: person }),
  events: defineCollection({ type: 'content', schema: event }),
};
