import { defineCollection, z } from 'astro:content'

// Reuse the same schema for articles and projects collections
const articles = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
	}),
})

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
	}),
})

// Generic pages collection (for things like the homepage main article)
const pages = defineCollection({})

export const collections = { articles, projects, pages }
