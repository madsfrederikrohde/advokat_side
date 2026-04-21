import { categories, services } from '$lib/data/services';
import { godtRaad } from '$lib/data/godtraad';
import { SITE_URL } from '$lib/config';

export const prerender = true;

const staticRoutes = [
	{ path: '/', priority: '1.0' },
	{ path: '/ydelser', priority: '0.9' },
	{ path: '/gode-raad', priority: '0.9' },
	{ path: '/about', priority: '0.7' },
	{ path: '/contact', priority: '0.7' },
	{ path: '/advokatsamfundet', priority: '0.5' },
	{ path: '/politikker', priority: '0.4' },
	{ path: '/forretningsbetingelser', priority: '0.4' },
	{ path: '/gdpr', priority: '0.4' },
	{ path: '/cookies', priority: '0.4' }
];

export const GET = () => {
	const today = new Date().toISOString().slice(0, 10);
	const urls = [
		...staticRoutes.map((r) => ({ loc: `${SITE_URL}${r.path}`, priority: r.priority })),
		...categories.map((c) => ({ loc: `${SITE_URL}/ydelser/${c.slug}`, priority: '0.8' })),
		...services.map((s) => ({
			loc: `${SITE_URL}/ydelser/${s.category}/${s.slug}`,
			priority: '0.9'
		})),
		...godtRaad.map((a) => ({ loc: `${SITE_URL}/gode-raad/${a.slug}`, priority: '0.8' }))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
