import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	// Gather entries from all content collections we care about
	const [articles, projects] = await Promise.all([
		getCollection('articles'),
		getCollection('projects'),
	])

	const all = [...articles, ...projects]

	// Sort by pubDate descending
	all.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf())

	return rss({
		title: 'Ka',
		description: 'Description',
		site: context.site,
		items: all.map((post) => {
			const routeBase = post.collection ?? 'articles'
			return {
				title: post.data.title,
				pubDate: post.data.pubDate,
				description: post.data.description,
				link: `/${routeBase}/${post.slug}/`,
			}
		}),
	})
}
