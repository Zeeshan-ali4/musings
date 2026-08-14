import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, isProductionPost, postSlug } from '../lib/site';

export async function GET(context) {
  const posts = (await getCollection('blog', isProductionPost)).sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
  return rss({ title: SITE.name, description: SITE.description, site: context.site, items: posts.map((post) => ({ title: post.data.title, description: post.data.description, pubDate: post.data.published, link: `/blog/${postSlug(post.id)}/` })) });
}
