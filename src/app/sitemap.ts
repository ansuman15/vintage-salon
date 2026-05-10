import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vintagesalon.vercel.app';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/service',
    '/pricing',
    '/blog',
    '/career',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
