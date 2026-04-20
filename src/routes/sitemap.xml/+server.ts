import { categories, services } from '$lib/data/services';

export const prerender = true;

const SITE = 'https://hansrohde.dk';

const staticRoutes = [
	'/',
	'/about',
	'/articles',
	'/contact',
	'/ydelser',
	'/advokatsamfundet',
	'/politikker',
	'/forretningsbetingelser',
	'/gdpr',
	'/cookies'
];

export const GET = () => {
	const today = new Date().toISOString().slice(0, 10);
	const urls = [
		...staticRoutes.map((p) => ({ loc: `${SITE}${p}`, priority: p === '/' ? '1.0' : '0.7' })),
		...categories.map((c) => ({ loc: `${SITE}/ydelser/${c.slug}`, priority: '0.8' })),
		...services.map((s) => ({
			loc: `${SITE}/ydelser/${s.category}/${s.slug}`,
			priority: '0.9'
		}))
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
