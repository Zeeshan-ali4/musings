import { slugify } from './site';

export const CATEGORY_TAGS: Record<string, string[]> = {
  identity: ['identity', 'kerberos', 'active-directory'],
  network: ['network', 'dns'],
  cloud: [],
  web: ['web-security', 'csp', 'architecture'],
  malware: [],
  detection: ['detection', 'engineering', 'operations']
};

export const categoryFor = (tags: string[]): string => {
  const slugs = tags.map(slugify);
  for (const [category, list] of Object.entries(CATEGORY_TAGS)) {
    if (slugs.some((t) => list.includes(t))) return category;
  }
  return 'detection';
};