export const SITE = {
  name: 'Musings',
  description: 'Notes on detection engineering, defensive architecture, and practical security research.',
  url: 'https://REPLACE_WITH_YOUR_DOMAIN.example',
  securityContact: 'REPLACE-WITH-SECURITY-CONTACT@example.invalid',
} as const;

export const isProductionPost = <T extends { data: { draft: boolean } }>(post: T) => !post.data.draft;
export const formatDate = (date: Date) => new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeZone: 'UTC' }).format(date);
export const slugify = (tag: string) => tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const postSlug = (id: string) => id.replace(/\.(?:md|mdx)$/, '');
