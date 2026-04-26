import { categories, services } from '$lib/data/services';
import { godtRaad } from '$lib/data/godtraad';
import { locations } from '$lib/data/locations';
import { SITE_URL } from '$lib/config';

export const prerender = true;

const staticRoutes = [
	{ path: '/', priority: '1.0' },
	{ path: '/boligadvokat', priority: '0.9' },
	{ path: '/ydelser', priority: '0.9' },
	{ path: '/gode-raad', priority: '0.9' },
	{ path: '/priser', priority: '0.7' },
	{ path: '/om-os', priority: '0.7' },
	{ path: '/kontakt', priority: '0.7' },
	{ path: '/advokatsamfundet', priority: '0.5' },
	{ path: '/politikker', priority: '0.4' },
	{ path: '/forretningsbetingelser', priority: '0.4' },
	{ path: '/gdpr', priority: '0.4' },
	{ path: '/cookies', priority: '0.4' }
];

// Computed once at module load — `prerender = true` means the sitemap is
// generated at build time, so this is effectively the build date.
const BUILD_DATE = new Date().toISOString().slice(0, 10);

interface SitemapUrl {
	loc: string;
	priority: string;
	lastmod?: string;
}

export const GET = () => {
	const urls: SitemapUrl[] = [
		...staticRoutes.map((r) => ({
			loc: `${SITE_URL}${r.path}`,
			priority: r.priority,
			lastmod: BUILD_DATE
		})),
		...categories.map((c) => ({ loc: `${SITE_URL}/ydelser/${c.slug}`, priority: '0.8' })),
		...services.map((s) => ({
			loc: `${SITE_URL}/ydelser/${s.category}/${s.slug}`,
			priority: '0.9'
		})),
		...godtRaad.map((a) => ({
			loc: `${SITE_URL}/gode-raad/${a.slug}`,
			priority: '0.8',
			lastmod: a.updatedAt ?? a.publishedAt
		})),
		...locations
			.filter((l) => !l.draft)
			.map((l) => ({ loc: `${SITE_URL}/boligadvokat/${l.slug}`, priority: '0.8' }))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <priority>${u.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
